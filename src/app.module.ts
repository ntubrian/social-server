import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/';
import { GraphQLBackendModule } from './graphql/graphql.module';

@Module({
	imports: [GraphQLBackendModule, CloudinaryModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
