import { BadRequestError } from "../../utils/error.res";
import { AuthorInsert, authorRepository } from "./author.repository";
import { GetAllAuthorsQuery } from "./author.schema";

type AuthorPayload = {
	author_name?: string;
	email?: string;
};

function assertCreatePayload(payload: AuthorPayload): asserts payload is AuthorInsert {
	if (!payload.author_name || !payload.email) {
		throw new BadRequestError("author_name và email là bắt buộc");
	}
}

export const authorService = {
	async getAllAuthors(query: GetAllAuthorsQuery) {

		const { page, limit, ...rest} = query
		const offset = (page - 1) * limit

		const [items, total] = await Promise.all([
			authorRepository.findAll({limit, offset, ...rest}),
			authorRepository.count(rest.search)
		])
		return {
			authors: items,
			pagination: {
				page, limit, total
			}
		}
	},

	async getAuthorById(id: number) {
		return authorRepository.findById(id);
	},

	async createAuthor(payload: AuthorPayload) {
		assertCreatePayload(payload);
		return authorRepository.create(payload);
	},

	async updateAuthor(id: number, payload: AuthorPayload) {
		if (!payload.author_name && !payload.email) {
			throw new Error("Cần ít nhất một trường để cập nhật");
		}
		return authorRepository.updateById(id, payload);
	},

	async deleteAuthor(id: number) {
		return authorRepository.deleteById(id);
	},
};
