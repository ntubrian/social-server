// import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginInlineTrace } from 'apollo-server-core';
// import { MovieCommentLikeModule } from 'src/movie-comment-like/movie-comment-like.module';
// import { MovieCommentModule } from 'src/movie-comment/movie-comment.module';
// import { MovieModule } from 'src/movie/movie.module';
import { UserModule } from '../user/user.module';

// import { APP_GUARD } from '@nestjs/core';
import { ApiKeyAuthGuard } from 'src/auth/strategy/apikey-auth.guard';
import { ArticleModule } from '../article/article.module';
import { GraphQLHelper } from './graphql.helper';
import { GraphQLResolver } from './graphql.resolver';

@Module({
	imports: [
		ConfigModule,
		GraphQLModule.forRoot({
			...GraphQLHelper.getApolloDriverConfig(),

			// autoSchemaFile: './src/graphql/schema.graphql', //process.env.DEV ?  : false, // resolve(process.cwd(), 'src/graphql/schema.graphql'), // process.env === 'development' ? './src/graphql/schema.graphql' :
			// emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),

			...(process.env.DEV && { autoSchemaFile: './src/graphql/schema.graphql' }),
			introspection: true,
			cors: {
				origin: '*',
				credentials: true,
			},
			autoTransformHttpErrors: true,
		}),

		UserModule,
		ArticleModule,
		// MovieCommentModule,
		// MovieCommentLikeModule,
	],
	providers: [GraphQLResolver, ApiKeyAuthGuard], // { provide: APP_GUARD, useClass: ApiKeyAuthGuard }
})
export class GraphQLBackendModule {}
