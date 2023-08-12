import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { MovieCommentLike } from 'src/movie-comment-like/movie-comment-like.model';
import { MovieCommentLikeService } from 'src/movie-comment-like/movie-comment-like.service';
import { MovieComment } from 'src/movie-comment/movie-comment.model';
import { MovieCommentService } from 'src/movie-comment/movie-comment.service';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserArgs } from './user.args';

@Resolver()
export class UserMutation {
	constructor(
		private movieCommentService: MovieCommentService,
		private movieCommentLikeService: MovieCommentLikeService,
		private userService: UserService
	) {}

	@Mutation(() => UserEntity)
	register(@Args() options: UserArgs): Promise<UserEntity> {
		return this.userService.register(options);
	}
}
