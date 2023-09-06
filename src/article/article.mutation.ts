import { Mutation, Resolver, ID, Args } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { ArticleEntity } from './article.entity';
import { CreateArticleArgs } from './create-article.args';
import { UpdateArticleArgs } from './update-article.args';
import { UseGuards } from '@nestjs/common';
import { ApiKeyAuthGuard } from 'src/auth/strategy/apikey-auth.guard';

@Resolver()
export class ArticleMutations {
	constructor(private readonly articleService: ArticleService) {}

	@UseGuards(ApiKeyAuthGuard)
	@Mutation(() => ArticleEntity)
	async createArticle(@Args() args: CreateArticleArgs): Promise<ArticleEntity> {
		return this.articleService.createArticle(args);
	}

	@UseGuards(ApiKeyAuthGuard)
	@Mutation(() => ArticleEntity)
	async updateArticle(@Args() args: UpdateArticleArgs): Promise<ArticleEntity> {
		return this.articleService.updateArticle(args);
	}
}
