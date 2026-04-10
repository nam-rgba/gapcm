

import { NextFunction, Request, Response } from "express"
import { CreatedResponse } from "../../utils/success.res"
import { authorService } from "./author.service"


class AuthorController {
	constructor() {}

	create = async (req: Request, res: Response, next: NextFunction) => {
		const userId = req.headers['x-user-id'] as unknown as number
		req.body.createdBy = userId
		new CreatedResponse('Create author successfully!', 201, await authorService.createAuthor(req.body)).send(res)
	}

	getAll = async (req: Request, res: Response, next: NextFunction) => {
		const authors = await authorService.getAllAuthors()
		new CreatedResponse('Get all authors successfully!', 200, authors).send(res)
	}

	getOne = async (req: Request, res: Response, next: NextFunction) => {
		const id = parseInt(req.params.id as string)
		const author = await authorService.getAuthorById(id)
		new CreatedResponse('Get author successfully!', 200, author).send(res)
	}

	update = async (req: Request, res: Response, next: NextFunction) => {
		const id = parseInt(req.params.id as string)
		const userId = req.headers['x-user-id'] as unknown as number
		req.body.updatedBy = userId
		const updatedAuthor = await authorService.updateAuthor(id, req.body)
		new CreatedResponse('Update author successfully!', 200, updatedAuthor).send(res)
	}

	delete = async (req: Request, res: Response, next: NextFunction) => {
		const id = parseInt(req.params.id as string)
		await authorService.deleteAuthor(id)
		new CreatedResponse('Delete author successfully!', 200).send(res)
	}

	
}

export const authorController = new AuthorController();