import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy, 'Apikey') {
	constructor(private authService: AuthService) {
		super({ header: 'Apikey', prefix: '' }, true, async (apiKey, done) => {
			if (this.authService.validatePassport(apiKey)) {
				done(null, true);
			}
			done(new UnauthorizedException(), null);
		});
	}
}
