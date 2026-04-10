import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import {z} from "zod";

export const author = pgTable("authors", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    author_name: varchar("author_name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
});


export const AuthorQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(100).default(10),
    search: z.string().optional(),
})

export type Author = typeof author.$inferSelect;
export type AuthorInsert = typeof author.$inferInsert;

