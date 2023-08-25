// import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginInlineTrace } from 'apollo-server-core';
// import { MovieCommentLikeModule } from 'src/movie-comment-like/movie-comment-like.module';
// import { MovieCommentModule } from 'src/movie-comment/movie-comment.module';
// import { MovieModule } from 'src/movie/movie.module';
import { UserModule } from '../user/user.module';

import { GraphQLHelper } from './graphql.helper';
import { GraphQLResolver } from './graphql.resolver';
import { ArticleModule } from '../article/article.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { resolve } from 'path';

@Module({
	imports: [
		ConfigModule,
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			...GraphQLHelper.getApolloDriverConfig(),
			driver: ApolloDriver,

			useFactory: () => {
				return {
					autoSchemaFile: process.env.DEV ? './src/graphql/schema.graphql' : resolve(process.cwd(), '/tmp'), // resolve(process.cwd(), 'src/graphql/schema.graphql'), // process.env === 'development' ? './src/graphql/schema.graphql' :
					introspection: true,
					cors: {
						origin: '*',
						credentials: true,
					},
					autoTransformHttpErrors: true,
				};
			},
		}),
		// modules
		// MovieModule,
		UserModule,
		ArticleModule,
		// MovieCommentModule,
		// MovieCommentLikeModule,
	],
	providers: [GraphQLResolver],
})
export class GraphQLBackendModule {}
