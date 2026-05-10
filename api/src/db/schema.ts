import { integer, pgTable, varchar, pgEnum, boolean } from "drizzle-orm/pg-core";
import { author } from "../modules/basic_crud/author.schema";
import { module } from "../models/module.model";

export const UILibValues = ["Ant", "ShadCN", "MUI"] as const;

export const fieldTypesValues = ["number", "string", "boolean", "enum"] as const;

export const FieldTypes = pgEnum("field_type", fieldTypesValues)

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

export const fieldsTable = pgTable("fields",{
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  fieldName: varchar("field_name", {length: 255}).notNull(),
  fieldType:FieldTypes("field_type").notNull(),
  nullable: boolean().default(true),
  unit:boolean().default(false),
  moduleId: integer("module_id").references(() => module.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
})

export const modulesTable = module;




// modules table: các bảng của các modulee code mẫu ==============================================================
export const authorTable = author;


