import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { MovieCommentLike } from './movie-comment-like.model';

@Injectable()
export class MovieCommentLikeService {
	constructor(private prisma: PrismaService) {}

	async getAllMovieCommetLikeByMovieCommentId(movieCommentId: string): Promise<MovieCommentLike[]> {
		return this.prisma.movieCommentLike.findMany({
			where: {
				movieCommentId,
			},
		});
	}

	async getAllMovieCommetLikeByUserId(userId: string): Promise<MovieCommentLike[]> {
		return this.prisma.movieCommentLike.findMany({
			where: {
				userId,
			},
		});
	}
}
