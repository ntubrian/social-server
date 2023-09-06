import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserArgs } from './user.args';
import { UseGuards } from '@nestjs/common';
import { ApiKeyAuthGuard } from 'src/auth/strategy/apikey-auth.guard';

@Resolver()
export class UserMutation {
	constructor(private userService: UserService) {}

	@UseGuards(ApiKeyAuthGuard)
	@Mutation(() => UserEntity)
	register(@Args() options: UserArgs): Promise<UserEntity> {
		return this.userService.register(options);
	}
}
