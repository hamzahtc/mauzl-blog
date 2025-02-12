import { Injectable } from '@nestjs/common';
import { CreatePostMetaDto } from './dto/create-post-meta.dto';
import { UpdatePostMetaDto } from './dto/update-post-meta.dto';

@Injectable()
export class PostMetasService {
  create(_createPostMetaDto: CreatePostMetaDto) {
    return 'This action adds a new postMeta';
  }

  findAll() {
    return `This action returns all postMetas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postMeta`;
  }

  update(id: number, _updatePostMetaDto: UpdatePostMetaDto) {
    return `This action updates a #${id} postMeta`;
  }

  remove(id: number) {
    return `This action removes a #${id} postMeta`;
  }
}
