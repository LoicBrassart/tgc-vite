import "reflect-metadata";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  owner: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  location: string;

  @Field({
    defaultValue:
      "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
  })
  @Column({
    default:
      "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
  })
  img: string;

  @Field()
  @Column()
  createdAt: number;

  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.ads)
  category: Category;

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.ads, { cascade: true })
  @JoinTable()
  tags: Tag[];
}
