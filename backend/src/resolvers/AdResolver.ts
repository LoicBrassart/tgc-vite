import { Context, User } from "../entities/User";
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";
import { Tag } from "../entities/Tag";
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

@InputType()
class NewAdInput implements Partial<Ad> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field(() => String, { nullable: true })
  imgUrl?: string;

  @Field()
  location: string;

  @Field(() => ID)
  category: Category;

  @Field(() => [ID])
  tags?: Tag[];
}

@Resolver(Ad)
export default class AdResolver {
  @Query(() => [Ad])
  async getAllAds() {
    const ads = await Ad.find({
      relations: ["category", "tags", "owner"],
    });
    return ads;
  }

  @Query(() => Ad)
  async getAdById(@Arg("adId") adId: string) {
    const ad = await Ad.findOneOrFail({
      where: { id: Number(adId) },
      relations: ["category", "tags", "owner"],
    });
    return ad;
  }

  @Authorized()
  @Mutation(() => Ad)
  async createNewAd(@Arg("data") newAdData: NewAdInput, @Ctx() ctx: Context) {
    const owner = await User.findOneByOrFail({ id: ctx.payload!.id });
    const resultFromSave = await Ad.save({ ...newAdData, owner });
    const resultForApi = await Ad.find({
      relations: { category: true },
      where: { id: resultFromSave.id },
    });
    return resultForApi[0];
  }

  @Authorized("MODERATOR")
  @Mutation(() => Ad)
  async deleteAd(@Arg("adId") adId: number) {
    const ad = await Ad.findOneByOrFail({ id: adId });
    ad.remove();
    return ad;
  }
}
