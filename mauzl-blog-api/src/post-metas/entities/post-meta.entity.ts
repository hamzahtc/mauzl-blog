import { Post } from 'src/posts/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PostMeta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  key: string;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => Post, (post) => post.postMetas, { onDelete: 'CASCADE' })
  post: Post;
}
