import { BadRequestError } from "../../utils/error.res";
import { AuthorInsert, authorRepository } from "./author.repository";

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
	async getAllAuthors() {
		return authorRepository.findAll();
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
