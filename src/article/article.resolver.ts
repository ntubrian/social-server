import { Args, Query, Resolver } from '@nestjs/graphql';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';

@Resolver(() => ArticleEntity)
export class ArticleResolver {
	constructor(private readonly articleService: ArticleService) {}

	@Query(() => [ArticleEntity])
	async getAllArticles(): Promise<ArticleEntity[]> {
		return this.articleService.getAllArticles();
	}

	@Query(() => ArticleEntity)
	async getArticleById(@Args('id') id: string): Promise<ArticleEntity> {
		return this.articleService.getArticleById(id);
	}
}
