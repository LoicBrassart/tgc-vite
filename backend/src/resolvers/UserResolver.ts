import * as dotenv from "dotenv";
import { User } from "../entities/User";
import { Query, Resolver } from "type-graphql";

dotenv.config();

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async getAllUsers() {
    return await User.find();
  }
}

export default UserResolver;
