import { Repository } from "typeorm";
import { AppDataSource } from "~/data-source.js";
import { User } from "~/entities/user.entity.js";


export class UserRepository{
    constructor(){
        this.repo = AppDataSource.getRepository(User)
    }

    private repo: Repository<User>;

    public findAll = async({})
}