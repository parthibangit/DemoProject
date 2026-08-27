import { APIRequestContext, APIResponse } from '@playwright/test'
import { listRecordQueryParam } from '../types/queryParamType';
import { userServiceEndPoints } from '../utils/endPointsUtils.ts';
import { createRecordPayloadTypes } from '../types/payloadType';

export class RecordService {

    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    };

    async getRecords(queryParam: listRecordQueryParam): Promise<APIResponse> {
        return await this.request.get(userServiceEndPoints.listRecords, { params: { ...queryParam } });
    };

    async getRecordById(recordId: string, queryParam: listRecordQueryParam): Promise<APIResponse> {
        return await this.request.get(userServiceEndPoints.getById(recordId), { params: { ...queryParam } });
    };

    async createRecord(recordPayload: createRecordPayloadTypes, queryParam: listRecordQueryParam): Promise<APIResponse> {
        return await this.request.post(userServiceEndPoints.listRecords, { data: recordPayload, params: { ...queryParam } });
    };

    async deleteRecord(recordId: string, queryParam: listRecordQueryParam): Promise<APIResponse> {
        return await this.request.delete(userServiceEndPoints.getById(recordId), { params: { ...queryParam } });
    };

};