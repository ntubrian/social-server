import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserArgs } from './user.args';

@Resolver()
export class UserMutation {
	constructor(private userService: UserService) {}

	@Mutation(() => UserEntity)
	register(@Args() options: UserArgs): Promise<UserEntity> {
		return this.userService.register(options);
	}
}
