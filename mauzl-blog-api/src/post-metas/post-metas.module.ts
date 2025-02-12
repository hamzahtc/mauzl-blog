import { Module } from '@nestjs/common';
import { PostMetasService } from './post-metas.service';
import { PostMetasController } from './post-metas.controller';

@Module({
  controllers: [PostMetasController],
  providers: [PostMetasService],
})
export class PostMetasModule {}
