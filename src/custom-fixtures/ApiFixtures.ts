import { test as base, request} from '@playwright/test'
import { RecordService } from '../services/RecordService.ts';

type MyApiFixtures = {
    recordService: RecordService;
};

export const apiFixtures = base.extend<MyApiFixtures>({

    recordService: async({request}, use: (value: RecordService) => Promise<void>) => {
        const recordService = new RecordService(request);
        await use(recordService);
    },

});