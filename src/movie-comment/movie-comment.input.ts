import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MovieCommentInput {
	@Field(() => String, {
		nullable: false,
		description: "User's description",
	})
	description: string;

	@Field(() => String, {
		nullable: false,
		description: 'Movie which was commented',
	})
	movieId: string;

	@Field(() => String, {
		nullable: false,
		description: 'User who wrote the comment',
	})
	userId: string;
}
