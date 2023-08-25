import { Injectable } from '@nestjs/common';
import { ArticleEntity } from './article.entity';
import { PrismaService } from '../../prisma/prisma.service';

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
}
