import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from '@social/prisma';
import { MovieCommentLikeModule } from 'src/movie-comment-like/movie-comment-like.module';
import { MovieCommentModule } from 'src/movie-comment/movie-comment.module';
import { UserMutation } from './user.mutation';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
	imports: [forwardRef(() => MovieCommentModule), forwardRef(() => MovieCommentLikeModule)],
	providers: [PrismaService, UserService, UserResolver, UserMutation],
	exports: [UserService, UserResolver, UserMutation],
})
export class UserModule {}
