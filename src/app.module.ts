import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/';
import { GraphQLBackendModule } from './graphql/graphql.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [GraphQLBackendModule, CloudinaryModule, AuthModule],
	controllers: [AppController],
	providers: [AppService, AuthService],
})
export class AppModule {}
