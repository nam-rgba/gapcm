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

export type Author = typeof author.$inferSelect;
export type AuthorInsert = typeof author.$inferInsert;
export type GetAllAuthorsResponse = Omit<Author, "email">;

