import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieCommentLike {
	@Field(() => String)
	id: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => String, {
		nullable: false,
		description: 'User who liked the comment',
	})
	userId: string;

	@Field(() => String, {
		nullable: false,
		description: 'Comment that was liked',
	})
	movieCommentId: string;
}
