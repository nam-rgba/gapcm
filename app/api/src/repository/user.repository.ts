import { Repository } from "typeorm";
import z from "zod";
import { AppDataSource } from "~/data-source.js";
import { User } from "~/entities/user.entity.js";

 class UserRepository{
    constructor(){
        this.repo = AppDataSource.getRepository(User)
    }

    private repo: Repository<User>;

    public findAll = async(query: z.infer<typeof AuthorQuery>) =>{
        const { page, limit, search } = query;
        const [users, total] = await this.repo.findAndCount({
            where: search ? { name: z.string().regex(new RegExp(search, 'i')).parse(search) } : {},
            skip: (page - 1) * limit,
            take: limit,
        });
        return { users, total };
    }
}

const userRepository = new UserRepository();
export default userRepository;


export const AuthorQuery = z.object({
    page: z.number().int().min(1).default(1),
    limit: z.number().int().min(1).max(100).default(10),
    search: z.string().optional(),

})