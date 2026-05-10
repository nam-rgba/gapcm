import { asc, count, desc, eq, ilike, or } from "drizzle-orm";
import { db } from "../../db/client";
import { author } from "./author.schema";

export type AuthorInsert = typeof author.$inferInsert;
export type AuthorUpdate = Partial<AuthorInsert>;

type FindAllOptions = {
	limit?: number;
	offset?: number;
	search?: string;
	sort?: "author_name" | "email";
	order?: "asc" | "desc";
}

export const authorRepository = {
	async findAll({limit, offset, search, sort, order}: FindAllOptions): Promise<AuthorInsert[]> {
		const conditions = [];
		if (search) {
			conditions.push(
				or(
					ilike(author.author_name, `%${search}%`),
					ilike(author.email, `%${search}%`)
				)
			);
		}
		
		const query = db.select().from(author);
		if (conditions.length > 0){
			query.where(conditions[0]);
		} 

		const sortColumn = sort ? author[sort] : author.id;
		const sortOrder = order === "desc" ? desc : asc;
		query.orderBy(sortOrder(sortColumn));

		return query.limit(limit ?? 10).offset(offset ?? 0);
	},

	async count(search?: string): Promise<number> {
		const conditions = [];
		if (search) {
			conditions.push(
				or(
					ilike(author.author_name, `%${search}%`),
					ilike(author.email, `%${search}%`)
				)
			);
		}
		const query = db.select({ count: count() }).from(author);
		if (conditions.length > 0){
			query.where(conditions[0]);
		}
		const result = await query;
		return result[0].count || 0;
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
