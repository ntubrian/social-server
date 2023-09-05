import { ArgsType, Field } from '@nestjs/graphql';

import { ModuleType } from '../lib/enum';

@ArgsType()
export class CreateArticleArgs {
	@Field(() => String)
	slug: string;

	@Field(() => ModuleType)
	moduleType: ModuleType;

	@Field(() => String)
	stringNodes: string;
}
