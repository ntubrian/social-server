import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';

import { CloudinaryService } from './cloudinary';
import { ApiKeyAuthGuard } from './auth/strategy/apikey-auth.guard';

@Injectable()
export class AppService {
	constructor(private cloudinary: CloudinaryService) {}
	getHello(): string {
		return 'Hello World!';
	}

	async uploadImageToCloudinary(file: Express.Multer.File) {
		console.log('file', file);
		return await this.cloudinary.uploadImage(file).catch(() => {
			throw new BadRequestException('Invalid');
		});
	}
}
