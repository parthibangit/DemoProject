import { z } from 'zod';

export const CreateRecordResponseSchema = z.object({
  data: z.object({
    id: z.string(),
    collection_id: z.string(),
    project_id: z.number(),
    app_user_id: z.string().nullable(),
    created_by: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    deleted_at: z.string().nullable(),
    data: z.object({
      name: z.string(),
      price: z.number(),
      category: z.string(),
      in_stock: z.boolean(),
    }),
  }),
});
