import { Category } from 'src/categories/entities/category.entity';
import { PostComment } from 'src/post-comments/entities/post-comment.entity';
import { PostMeta } from 'src/post-metas/entities/post-meta.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column({ length: 75 })
  title: string;

  @Column({ length: 100 })
  metaTitle: string;

  @Column({ length: 100 })
  slug: string;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @Column({ default: 0 })
  published: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  publishedAt: Date;

  @Column({ type: 'text' })
  content: string;

  @OneToMany(() => PostComment, (comment) => comment.post)
  comments: PostComment[];

  @OneToMany(() => PostMeta, (postMeta) => postMeta.post)
  postMetas: PostMeta[];

  @ManyToMany(() => Category)
  @JoinTable({ name: 'post_category' })
  categories: Category[];

  @ManyToMany(() => Tag)
  @JoinTable({ name: 'post_tag' })
  tags: Tag[];
}
