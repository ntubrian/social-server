import * as faker from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { MovieInput } from '@social/movie';
import { UserArgs } from 'src/user/user.args';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

const createManyMovies = async () => {
	if ((await prisma.movie.count()) === 0) {
		for (let i = 0; i < 30; i++) {
			// create data
			const movie: MovieInput = {
				title: faker.faker.music.genre(),
				description: faker.faker.random.words(6),
			};

			// insert to DB
			await prisma.movie.create({
				data: {
					...movie,
				},
			});
		}
	}
};

const createManyUsers = async () => {
	if ((await prisma.user.count()) === 0) {
		for (let i = 0; i < 30; i++) {
			// create data
			const user: UserArgs = {
				username: faker.faker.person.fullName(),
				description: faker.faker.random.words(6),
				email: faker.faker.internet.email(),
				password: await hash('Abcd1234', 10),
			};

			// insert to DB
			await prisma.user.create({
				data: {
					...user,
				},
			});
		}
	}
};

const run = async () => {
	const prisma = new PrismaClient();
	try {
		await createManyMovies();
		await createManyUsers();
	} finally {
		await prisma.$disconnect();
	}
};

run();
