import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MovieCommentLike } from '../movie-comment-like/movie-comment-like.model';
import { MovieCommentService } from '../movie-comment/movie-comment.service';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { MovieComment } from '../movie-comment/movie-comment.model';

@Resolver(() => MovieCommentLike)
export class MovieCommentLikeResolver {
	constructor(private movieCommentService: MovieCommentService, private userService: UserService) {}

	@ResolveField('movieComment', () => MovieComment)
	async getCommentThatWasLiked(@Parent() movieCommentLike: MovieCommentLike): Promise<MovieComment> {
		const { movieCommentId } = movieCommentLike;
		return this.movieCommentService.getMovieCommetById(movieCommentId);
	}

	@ResolveField('user', () => UserEntity)
	async getUserThatLikedTheComment(@Parent() movieCommentLike: MovieCommentLike): Promise<UserEntity> {
		const { userId } = movieCommentLike;
		return this.userService.getUserById(userId);
	}
}
