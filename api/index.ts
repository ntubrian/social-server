import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });
	// app.enableCors({
	// 	allowedHeaders: 'Content-Type, Accept',
	// 	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	// 	origin: 'http://localhost:3000',
	// 	credentials: true,
	// });
	await app.listen(3000);
}
bootstrap();
