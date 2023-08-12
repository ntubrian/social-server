import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieComment {
	@Field(() => String)
	id: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => String, {
		nullable: true,
		description: 'Comment that was added',
	})
	description?: string;

	@Field(() => String)
	movieId: string;

	@Field(() => String)
	userId: string;
}
