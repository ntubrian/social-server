import { Mutation, Resolver, ID, Args } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { ArticleEntity } from './article.entity';
import { CreateArticleArgs } from './create-article.args';
import { UpdateArticleArgs } from './update-article.args';

@Resolver()
export class ArticleMutations {
	constructor(private readonly articleService: ArticleService) {}
	@Mutation(() => ArticleEntity)
	async createArticle(@Args() args: CreateArticleArgs): Promise<ArticleEntity> {
		return this.articleService.createArticle(args);
	}

	@Mutation(() => ArticleEntity)
	async updateArticle(@Args() args: UpdateArticleArgs): Promise<ArticleEntity> {
		return this.articleService.updateArticle(args);
	}
}
