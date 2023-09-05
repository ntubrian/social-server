import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';
import { ArticleMutations } from './article.mutation';

@Module({
	providers: [PrismaService, ArticleService, ArticleResolver, ArticleMutations],
	exports: [ArticleService, ArticleResolver],
})
export class ArticleModule {}
