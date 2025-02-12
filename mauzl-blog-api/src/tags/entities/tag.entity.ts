import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 75 })
  title: string;

  @Column({ length: 100 })
  metaTitle: string;

  @Column({ length: 100 })
  slug: string;

  @Column({ type: 'text' })
  content: string;
}
