import userRepository from "~/repository/user.repository.js";


class UserService {

    private repo = userRepository;


    public getAll = async (query: any) => {
        return await this.repo.findAll(query)
    }

    public getById = async (id: number) => {
        return await this.repo.findById(id)
    }

    public create = async (user: any) => {
        return await this.repo.create(user)
    }

    public update = async (id: number, user: any) => {
        return await this.repo.update(id, user)
    }

    public delete = async (id: number) => {
        return await this.repo.delete(id)
    }


}

const userService = new UserService();
export default userService;