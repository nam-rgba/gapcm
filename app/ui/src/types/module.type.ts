export interface Module {
    id: number;
    name: string;
    dbName: string;
    description: string;
    fields: Field[];
}

export interface Field {
    id: number;
    name: string;
    dbName: string;
    type: typeof fieldTypesValues
    maxLength?: number;
    nullable: boolean;
    unit: boolean;
    enum: string[];
    reference: {
        moduleId: number;
        fieldId: number;
        type: ModuleReferenceTypes;
    } | null;
}

export enum ModuleReferenceTypes {
    OneToOne = "one-to-one",
    OneToMany = "one-to-many",
    ManyToOne = "many-to-one",
    ManyToMany = "many-to-many",
}

export const fieldTypesValues = ["number", "string", "boolean", "enum"] as const;