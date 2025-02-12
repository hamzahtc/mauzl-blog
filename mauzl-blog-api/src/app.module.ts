import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import { PostCommentsModule } from './post-comments/post-comments.module';
import { PostMetasModule } from './post-metas/post-metas.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createDataSource } from './db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        createDataSource(configService),
      inject: [ConfigService],
    }),
    PostsModule,
    UsersModule,
    TagsModule,
    CategoriesModule,
    PostCommentsModule,
    PostMetasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
