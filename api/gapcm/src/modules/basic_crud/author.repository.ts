import { eq } from "drizzle-orm";
import { db } from "../../db/client";
import { author } from "./author.schema";

export type AuthorInsert = typeof author.$inferInsert;
export type AuthorUpdate = Partial<AuthorInsert>;

export const authorRepository = {
	async findAll(): Promise<AuthorInsert[]> {
		return db.select().from(author);
	},

	async findById(id: number) {
		const rows = await db.select().from(author).where(eq(author.id, id)).limit(1);
		return rows[0] ?? null;
	},

	async create(data: AuthorInsert) {
		const rows = await db.insert(author).values(data).returning();
		return rows[0];
	},

	async updateById(id: number, data: AuthorUpdate) {
		const rows = await db.update(author).set(data).where(eq(author.id, id)).returning();
		return rows[0] ?? null;
	},

	async deleteById(id: number) {
		const rows = await db.delete(author).where(eq(author.id, id)).returning();
		return rows[0] ?? null;
	},
};
