import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/';
import { GraphQLBackendModule } from './graphql/graphql.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
	imports: [GraphQLBackendModule, CloudinaryModule, AuthModule, ArticleModule],
	controllers: [AppController],
	providers: [AppService, AuthService],
})
export class AppModule {}
