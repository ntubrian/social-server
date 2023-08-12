import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MovieCommentLikeInput {
	@Field(() => String, {
		nullable: false,
		description: 'Comment that has been liked',
	})
	movieCommentId: string;

	@Field(() => String, {
		nullable: false,
		description: 'User who liked the coment',
	})
	userId: string;
}
