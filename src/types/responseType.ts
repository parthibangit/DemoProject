export type CreateRecordResponseType = {
  data: {
    id: string;
    collection_id: string;
    project_id: number;
    app_user_id: string | null;
    created_by: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    data: {
      name: string;
      price: number;
      category: string;
      in_stock: boolean
    };
  };
};