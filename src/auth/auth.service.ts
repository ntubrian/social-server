import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	validatePassport(passport: string) {
		const passports: string[] = [process.env.BASIC_AUTH];

		return passports.find((p) => p === passport);
	}
}
