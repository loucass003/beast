import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { ShowModule } from 'src/show/show.module';
import { MovieModule } from 'src/movie/movie.module';
import { ServerDBModule } from '@beast/server-db-schemas';

@Module({
  imports: [ServerDBModule, ShowModule, MovieModule],
  providers: [LibraryService],
  exports: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}