import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const author = pgTable("authors", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    author_name: varchar("author_name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
});