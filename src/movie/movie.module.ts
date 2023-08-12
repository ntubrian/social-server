import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from '@social/prisma';
import { MovieCommentModule } from 'src/movie-comment/movie-comment.module';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';

@Module({
	imports: [forwardRef(() => MovieCommentModule)],
	providers: [MovieResolver, MovieService, PrismaService],
	exports: [MovieResolver, MovieService],
})
export class MovieModule {}
