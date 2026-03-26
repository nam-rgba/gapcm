import { integer, pgTable, varchar, pgEnum } from "drizzle-orm/pg-core";

export const UILibValues = ["Ant", "ShadCN", "MUI"] as const;

export const fieldTypes = ["number", "string", "boolean", "enum"];

export const UILib = pgEnum("ui_lib", UILibValues);

export const componentsTable = pgTable("components", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  uiLib: UILib("ui_lib").default("Ant"),
  uiLibVer: varchar("ui_lib_ver", { length: 10 }),
});

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  userName: varchar("user_name", { length: 255 }),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const fieldsTable = pgTable;

export const crudModulesTable = pgTable("crud_modules", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  moduleName: varchar("module_name", { length: 255 }).notNull(),
  userId: integer("user_id").references(() => usersTable.id, {
    onDelete: "set null",
    onUpdate: "cascade",
  }),
});
