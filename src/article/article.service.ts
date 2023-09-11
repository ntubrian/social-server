import { Injectable } from '@nestjs/common';
import { ArticleEntity } from './article.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateArticleArgs } from './update-article.args';
import { CreateArticleArgs } from './create-article.args';

@Injectable()
export class ArticleService {
	constructor(private prisma: PrismaService) {}

	async getAllArticles(): Promise<ArticleEntity[]> {
		const b = this.prisma.article.findMany();
		return b;
	}

	async getArticleById(id: string): Promise<ArticleEntity> {
		return this.prisma.article.findUniqueOrThrow({
			where: {
				id,
			},
		});
	}

	async createArticle(args: CreateArticleArgs): Promise<ArticleEntity> {
		return this.prisma.article.create({
			data: args,
		});
	}

	async updateArticle(args: UpdateArticleArgs): Promise<ArticleEntity> {
		const { id, moduleType, slug, stringNodes } = args;

		return this.prisma.article.update({
			where: {
				id: id,
			},
			data: { moduleType, slug, stringNodes },
		});
	}
}
