import { BadRequestException, Injectable } from '@nestjs/common';

import { CloudinaryService } from './cloudinary';

@Injectable()
export class AppService {
	constructor(private cloudinary: CloudinaryService) {}
	getHello(): string {
		return 'Hello World!';
	}

	async uploadImageToCloudinary(file: Express.Multer.File) {
		return await this.cloudinary.uploadImage(file).catch(() => {
			throw new BadRequestException({ message: 'q', reason: 'fXXX' });
		});
	}
}
