import { Category } from "../entities/Category";
import { Query, Resolver } from "type-graphql";

@Resolver(Category)
export default class CategoryResolver {
  @Query(() => [Category])
  async getAllCategories() {
    const categories = await Category.find({
      relations: ["ads"],
    });
    return categories;
  }
}
