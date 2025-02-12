import { Post } from 'src/posts/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50, nullable: true })
  middleName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 15, unique: true })
  mobile: string;

  @Column({ length: 75, unique: true })
  email: string;

  @Column({ length: 32 })
  passwordHash: string;

  @Column()
  registeredAt: Date;

  @Column({ nullable: true })
  lastLogin: Date;

  @Column({ type: 'text', nullable: true })
  intro: string;

  @Column({ type: 'text', nullable: true })
  profile: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
