import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';

@Module({
	providers: [PrismaService, ArticleService, ArticleResolver],
	exports: [ArticleService, ArticleResolver],
})
export class ArticleModule {}
