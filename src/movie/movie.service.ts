import { Injectable } from '@nestjs/common';
import { PrismaService } from '@social/prisma';

import { Movie } from './movie.model';

@Injectable()
export class MovieService {
	constructor(private prisma: PrismaService) {}

	async getAllMovies(): Promise<Movie[]> {
		return this.prisma.movie.findMany();
	}

	async getMovieById(id: string): Promise<Movie> {
		return this.prisma.movie.findFirstOrThrow({
			where: {
				id,
			},
		});
	}
}
