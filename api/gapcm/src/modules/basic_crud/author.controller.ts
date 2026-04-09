import { Request, Response } from "express";
import { authorService } from "./author.service";

export const getAllAuthors = async (_req: Request, res: Response) => {
	const data = await authorService.getAllAuthors();
	return res.status(200).json(data);
};

export const getAuthorById = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	if (Number.isNaN(id)) {
		return res.status(400).json({ message: "id không hợp lệ" });
	}

	const data = await authorService.getAuthorById(id);
	if (!data) {
		return res.status(404).json({ message: "Không tìm thấy author" });
	}
	return res.status(200).json(data);
};

export const createAuthor = async (req: Request, res: Response) => {
	try {
		const created = await authorService.createAuthor(req.body);
		return res.status(201).json(created);
	} catch (error) {
		return res.status(400).json({ message: (error as Error).message });
	}
};

export const updateAuthor = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	if (Number.isNaN(id)) {
		return res.status(400).json({ message: "id không hợp lệ" });
	}

	try {
		const updated = await authorService.updateAuthor(id, req.body);
		if (!updated) {
			return res.status(404).json({ message: "Không tìm thấy author" });
		}
		return res.status(200).json(updated);
	} catch (error) {
		return res.status(400).json({ message: (error as Error).message });
	}
};

export const deleteAuthor = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	if (Number.isNaN(id)) {
		return res.status(400).json({ message: "id không hợp lệ" });
	}

	const deleted = await authorService.deleteAuthor(id);
	if (!deleted) {
		return res.status(404).json({ message: "Không tìm thấy author" });
	}

	return res.status(200).json({ message: "Xóa author thành công", data: deleted });
};
