import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const module = pgTable("crud_modules", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("module_name", { length: 100 }).notNull(),
  description: varchar("module_description", { length: 255 }),
});