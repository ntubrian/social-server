import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { MovieCommentLikeModule } from 'api/movie-comment-like/movie-comment-like.module';
import { MovieCommentModule } from 'api/movie-comment/movie-comment.module';
import { UserMutation } from './user.mutation';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
	imports: [forwardRef(() => MovieCommentModule), forwardRef(() => MovieCommentLikeModule)],
	providers: [PrismaService, UserService, UserResolver, UserMutation],
	exports: [UserService, UserResolver, UserMutation],
})
export class UserModule {}
