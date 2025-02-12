import { Post } from 'src/posts/entities/post.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class PostComment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  post: Post;

  @Column({ length: 100 })
  title: string;

  @Column({ default: 0 })
  published: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  publishedAt: Date;

  @Column({ type: 'text' })
  content: string;
}
