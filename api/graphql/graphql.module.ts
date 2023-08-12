import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MovieCommentLikeModule } from 'api/movie-comment-like/movie-comment-like.module';
import { MovieCommentModule } from 'api/movie-comment/movie-comment.module';
import { MovieModule } from 'api/movie/movie.module';
import { UserModule } from 'api/user/user.module';
import { GraphQLHelper } from './graphql.helper';
import { GraphQLResolver } from './graphql.resolver';

@Module({
	imports: [
		ConfigModule,
		GraphQLModule.forRoot({
			...GraphQLHelper.getApolloDriverConfig(),
			cors: {
				origin: '*',
				credentials: true,
			},
		}),
		// modules
		// MovieModule,
		UserModule,
		// MovieCommentModule,
		// MovieCommentLikeModule,
	],
	providers: [GraphQLResolver],
})
export class GraphQLBackendModule {}
