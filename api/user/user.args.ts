import { ArgsType, Field, InputType } from '@nestjs/graphql';

@ArgsType()
export class UserArgs {
	@Field(() => String, {
		nullable: false,
		description: "User's name that will be visible",
	})
	username: string;

	@Field(() => String, {
		nullable: true,
		description: "User's description",
	})
	description?: string;

	@Field(() => String, {
		nullable: false,
		description: 'email',
	})
	email: string;

	@Field(() => String, {
		nullable: false,
		description: 'password',
	})
	password: string;
}
