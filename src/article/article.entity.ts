import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ModuleType } from '../lib/enum';

@ObjectType('Article')
export class ArticleEntity {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	title: string;

	@Field(() => String)
	photoUrl: string;

	@Field(() => String)
	slug: string;

	@Field(() => ModuleType)
	moduleType: ModuleType;

	@Field(() => String)
	stringNodes: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date, { nullable: true })
	updatedAt: Date;
}
