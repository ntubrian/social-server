import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ApiKeyAuthGuard } from './auth/strategy/apikey-auth.guard';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });
	app.use(json({ limit: '20mb' }));

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			exceptionFactory: (errors) => {
				const messageFlatter = (errs: ValidationError[]) =>
					errs.reduce<string[]>((messages, { constraints, children }) => {
						if (constraints) {
							Object.keys(constraints).forEach((key) => {
								messages.push(`[${key}] ${constraints[key]}`);
							});
						}

						if (children) {
							messages.push(...messageFlatter(children));
						}
						return messages;
					}, []);

				if (errors.length > 0) {
					throw new BadRequestException(messageFlatter(errors).join('\n'));
				}
			},
		})
	);
	// app.enableCors({
	// 	allowedHeaders: 'Content-Type, Accept',
	// 	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	// 	origin: 'http://localhost:3000',
	// 	credentials: true,
	// });
	await app.listen(3000);
}
bootstrap();
