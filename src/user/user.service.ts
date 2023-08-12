import { Injectable } from '@nestjs/common';

import { PrismaService } from '@social/prisma';
import { UserEntity } from './user.entity';
import { UserArgs } from './user.args';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getAllUsers(): Promise<UserEntity[]> {
		return this.prisma.user.findMany();
	}

	async getUserById(id: string): Promise<UserEntity> {
		return this.prisma.user.findUniqueOrThrow({
			where: {
				id,
			},
		});
	}

	async register(args: UserArgs): Promise<UserEntity> {
		const user = this.prisma.user.create({
			data: {
				...args,
				password: await hash(args.password, 10),
			},
		});

		return user;
	}
}
