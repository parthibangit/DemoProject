---
name: jenkins-report-analysis
description: "Analyze failed Playwright test results from Jenkins builds and generate a single downloadable HTML failure report from test-results/results.xml. Use for Jenkins jobs, Jenkins builds, Jenkins test results, or Jenkins Playwright failure reports."
argument-hint: "Provide the Jenkins job name and build number"
user-invocable: true
disable-model-invocation: false
---

# Jenkins Report Analysis

## Scope

Use this skill only for Playwright test results produced by Jenkins builds.

In scope:

- A Jenkins job or build test report
- Jenkins Playwright test results
- The `test-results/results.xml` artifact
- An HTML failure report generated from Jenkins results

Out of scope:

- Local-only reports
- Reports from sources other than Jenkins
- General test-report questions
- Coding questions or unrelated requests

For an out-of-scope request, reply exactly:

`Sorry, I can only review Playwright test results from Jenkins builds.`

## Procedure

1. Identify the Jenkins job and build number. If the build number is missing, use the Jenkins recent-builds operation.
2. Retrieve the build status and Jenkins test results.
3. Retrieve the `test-results/results.xml` artifact.
4. Analyze every `testcase` in the XML.
5. Generate one valid HTML5 document in the workspace root, unless the user explicitly supplies another output path.
6. Use an HTML `<table>` with exactly five columns:
   - Test File
   - Test Title
   - Status
   - Failure Reason
   - Suggestion to Fix
7. Escape all XML-derived text before inserting it into HTML. Escape at least `&`, `<`, `>`, `\"`, and apostrophes where appropriate.
8. Normalize all backslashes in test file paths to forward slashes.
9. Base each remediation suggestion only on evidence present in the XML, such as an assertion, locator, error message, file path, or line number.
10. Return or save the report as raw HTML beginning with `<!DOCTYPE html>` when direct HTML output is requested. Do not wrap it in Markdown fences.

## XML-to-HTML Mapping

### Test File

Use `testsuite/@name` or, when unavailable, `testcase/@classname`. Normalize `\\` to `/`.

### Test Title

Use `testcase/@name`.

### Status

Output `FAIL` when the testcase contains a `<failure>` or `<error>` element.

### Failure Reason

For failed testcases, summarize the relevant `message` and `type` attributes together with the CDATA or inner text details from `<failure>` or `<error>`.

### Suggestion to Fix

For failed testcases, provide a concise remediation grounded strictly in the failure evidence. Do not infer application behavior or propose unsupported changes.

## HTML Requirements

Embed a `<style>` block in the document `<head>` with these characteristics:

- A clean sans-serif font family such as Arial, Helvetica, or system-ui
- A table width of `100%`
- `border-collapse: collapse`
- Explicit cell padding of approximately `10px` to `12px`
- Light zebra striping for table body rows, such as `#f9f9f9`
- Dark table-header cells with white text
- A red text or red pill badge for `FAIL`

The generated document must contain one clear report table and must remain valid even when XML details contain brackets, code snippets, or raw log symbols.
