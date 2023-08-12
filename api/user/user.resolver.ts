import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { MovieCommentLike } from 'api/movie-comment-like/movie-comment-like.model';
import { MovieCommentLikeService } from 'api/movie-comment-like/movie-comment-like.service';
import { MovieComment } from 'api/movie-comment/movie-comment.model';
import { MovieCommentService } from 'api/movie-comment/movie-comment.service';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
	constructor(
		private movieCommentService: MovieCommentService,
		private movieCommentLikeService: MovieCommentLikeService,
		private userService: UserService
	) {}

	@Query(() => [UserEntity])
	async getAllUsers(): Promise<UserEntity[]> {
		return this.userService.getAllUsers();
	}

	@ResolveField('movieCommentsUserLeft', () => [MovieComment])
	async getMovieCommentsThatUserWritten(@Parent() user: UserEntity): Promise<MovieComment[]> {
		const { id } = user;
		return this.movieCommentService.getAllMovieCommentsByUserId(id);
	}

	@ResolveField('movieCommentsUserLiked', () => [MovieCommentLike])
	async getUserThatLikedTheComment(@Parent() user: UserEntity): Promise<MovieCommentLike[]> {
		const { id } = user;
		return this.movieCommentLikeService.getAllMovieCommetLikeByUserId(id);
	}
}
