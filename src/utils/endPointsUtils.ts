export const userServiceEndPoints = {

    listRecords: "/api/collections/products/records",
    getById: (id: string) => `/api/collections/products/records/${id}`
};

export const enrollmentServiceEndPoints = {

    enrollmentRecords: "/api/collections/products/records",
    getByPlanningGroupId: (id: string) => `/api/collections/products/records/${id}`,
    getByRelationshipId: (id: string) => `/api/collections/products/records/${id}`
};