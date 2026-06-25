import userRepository from "~/repository/user.repository.js";


class UserService {

    private repo = userRepository;


    public getAll = async (query: any) => {
        return await this.repo.findAll(query)
    }


}

const userService = new UserService();
export default userService;