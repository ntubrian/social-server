import { ArgsType, Field, ID, PartialType } from '@nestjs/graphql';

import { CreateArticleArgs } from './create-article.args';

@ArgsType()
export class UpdateArticleArgs extends PartialType(CreateArticleArgs) {
	@Field(() => ID)
	id: string;
}
