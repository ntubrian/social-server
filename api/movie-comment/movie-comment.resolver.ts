import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MovieCommentLike } from 'api/movie-comment-like/movie-comment-like.model';
import { MovieCommentLikeService } from 'api/movie-comment-like/movie-comment-like.service';
import { MovieComment } from './movie-comment.model';

@Resolver(() => MovieComment)
export class MovieCommentResolver {
	constructor(private movieCommentLikeService: MovieCommentLikeService) {}

	@ResolveField('likedBy', () => [MovieCommentLike])
	async getCommentLikedBy(@Parent() movieComment: MovieComment) {
		const { id } = movieComment;
		return this.movieCommentLikeService.getAllMovieCommetLikeByMovieCommentId(id);
	}
}