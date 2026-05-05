import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import {z} from "zod";
import { BaseQuerySchema } from "../../interfaces/request";

export const author = pgTable("authors", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    author_name: varchar("author_name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
});


export const AuthorQuerySchema = BaseQuerySchema.extend({
    sort: z.enum(["author_name", "email"]).optional(),
    order: z.enum(["asc", "desc"]).optional(),
})

export const AuthorInsertSchema = z.object({
    author_name: z.string().min(1).max(255),
    email: z.string().max(255),
})

export type Author = typeof author.$inferSelect;
export type AuthorInsert = z.infer<typeof AuthorInsertSchema>;
export type GetAllAuthorsResponse = Omit<Author, "email">;
export type GetAllAuthorsQuery = z.infer<typeof AuthorQuerySchema>;

