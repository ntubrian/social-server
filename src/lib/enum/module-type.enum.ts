import { registerEnumType } from '@nestjs/graphql';

export const ModuleType: {
	ARTICLE: 'ARTICLE';
	ANNOUNCE: 'ANNOUNCE';
} = {
	ARTICLE: 'ARTICLE',
	ANNOUNCE: 'ANNOUNCE',
};

export type ModuleType = (typeof ModuleType)[keyof typeof ModuleType];
registerEnumType(ModuleType, { name: 'ModuleType' });
