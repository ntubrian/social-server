import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from '@social/prisma';
import { MovieCommentLikeModule } from 'src/movie-comment-like/movie-comment-like.module';
import { MovieCommentResolver } from './movie-comment.resolver';
import { MovieCommentService } from './movie-comment.service';

@Module({
	imports: [forwardRef(() => MovieCommentLikeModule)],
	providers: [PrismaService, MovieCommentService, MovieCommentResolver],
	exports: [MovieCommentService, MovieCommentResolver],
})
export class MovieCommentModule {}
