import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fetchAuthJsonFile } from './src/utils/fileUtils';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// Read the ENV variable from the CLI, default to 'uat' if none is provided
const environment = process.env.ENV || 'uat';

dotenv.config({ 
    path: `./environments/${environment}/.env.${environment}`,
  });


// Helper function to wipe the directory contents safely
/** @param {string} dirPath */
const clearDirectory = (dirPath: string) => {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`🧹 Cleared old allure cache at: ${dirPath}`);
  }
};

// Define the target paths for allure data
const resultsDir = path.resolve(__dirname, 'reports/allure-results');
const reportDir = path.resolve(__dirname, 'reports/allure-report');

// Execute the cleanup routine before configuration initializes
clearDirectory(resultsDir);
clearDirectory(reportDir);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['allure-playwright', {
      resultsDir: 'reports/allure-results', // Folder where raw data is saved
      detail: true,                         // Captures step-by-step API actions
      suiteTitle: true,                     // Groups tests by file name
    }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
    /* Each action take 3 second to perform */
    // actionTimeout: 3000,
    /* Each navigation takes 8 seconds */
    // navigationTimeout: 8000,
  },
  /* default time out is 30_000ms(30s), per our need we can customise */
  timeout: 40_000,
  /* default time out is 5000ms(5s), per our need we can customise */
  expect: { timeout: 7000},

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'mobile_chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'setup',
      testMatch: /.*\LoginSetup\.ts/,
    },
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], 
        channel: 'chrome', 
        // 1. Disable the default 1280x720 viewport 
        viewport: null, 
        // block the notifications by default
        permissions:[],    
        // Add a delay in milliseconds between each operation (e.g., 500ms)
        launchOptions: {
          slowMo: 1000,
          args: ['-start-maximized', '--deny-permission-prompts'],
          },
        deviceScaleFactor: undefined,
        // Inject the pre-authenticated session state into every test
        storageState: fetchAuthJsonFile()  
      },
      // Ensure the 'setup' project finishes before this one starts
      dependencies: ['setup'] 
    },

    /* dedicated to API automation project. */
    {
      name: 'api-tests',
      testMatch: /apitests\/.*\.spec\.ts/,
      use: { 
        baseURL: 'https://reqres.in',
        ignoreHTTPSErrors: true,
        /* handles the bearer token authentication */
        extraHTTPHeaders: {
          'x-api-key': process.env.API_KEY ?? '',
          'X-Reqres-Env': 'prod',
          'Content-Type': 'application/json'
        },
        /* handles the basic authentication */
        httpCredentials: {
          username: 'username',
          password: 'password'
        }
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
