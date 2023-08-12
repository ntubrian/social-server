import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserEntity {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	username: string;

	@Field(() => String)
	email: string;

	@Field(() => String)
	password: string;

	@Field(() => String)
	role: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	@Field(() => String, {
		nullable: true,
		description: "Description to user's usernaem",
	})
	description?: string;
}
