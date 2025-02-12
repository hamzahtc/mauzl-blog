import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDb1739376159293 implements MigrationInterface {
  name = 'InitDb1739376159293';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tag" ("id" SERIAL NOT NULL, "title" character varying(75) NOT NULL, "metaTitle" character varying(100) NOT NULL, "slug" character varying(100) NOT NULL, "content" text NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "title" character varying(75) NOT NULL, "metaTitle" character varying(100) NOT NULL, "slug" character varying(100) NOT NULL, "content" text NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_comment" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "published" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "publishedAt" TIMESTAMP, "content" text NOT NULL, "postId" integer, CONSTRAINT "PK_5a0d63e41c3c55e11319613550c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying(50) NOT NULL, "middleName" character varying(50), "lastName" character varying(50) NOT NULL, "mobile" character varying(15) NOT NULL, "email" character varying(75) NOT NULL, "passwordHash" character varying(32) NOT NULL, "registeredAt" TIMESTAMP NOT NULL, "lastLogin" TIMESTAMP, "intro" text, "profile" text, CONSTRAINT "UQ_29fd51e9cf9241d022c5a4e02e6" UNIQUE ("mobile"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying(75) NOT NULL, "metaTitle" character varying(100) NOT NULL, "slug" character varying(100) NOT NULL, "summary" text, "published" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "publishedAt" TIMESTAMP, "content" text NOT NULL, "userId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_meta" ("id" SERIAL NOT NULL, "key" character varying(50) NOT NULL, "content" text NOT NULL, "postId" integer, CONSTRAINT "PK_44de5a6fce24e7e35d488605f84" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_category" ("postId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_f31260b64eb7c3b1679d826dace" PRIMARY KEY ("postId", "categoryId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_494ef7ec4fdfe88460918524b5" ON "post_category" ("postId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_08d685cc924e645dfad494c912" ON "post_category" ("categoryId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "post_tag" ("postId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_7e4fae2ea901c7c38a0e431d2b3" PRIMARY KEY ("postId", "tagId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_444c1b4f6cd7b632277f557935" ON "post_tag" ("postId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_346168a19727fca1b1835790a1" ON "post_tag" ("tagId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "post_comment" ADD CONSTRAINT "FK_c7fb3b0d1192f17f7649062f672" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post" ADD CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_meta" ADD CONSTRAINT "FK_97c47962541d9faa1070208829f" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_category" ADD CONSTRAINT "FK_494ef7ec4fdfe88460918524b51" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_category" ADD CONSTRAINT "FK_08d685cc924e645dfad494c9129" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_tag" ADD CONSTRAINT "FK_444c1b4f6cd7b632277f5579354" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_tag" ADD CONSTRAINT "FK_346168a19727fca1b1835790a14" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_tag" DROP CONSTRAINT "FK_346168a19727fca1b1835790a14"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_tag" DROP CONSTRAINT "FK_444c1b4f6cd7b632277f5579354"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_category" DROP CONSTRAINT "FK_08d685cc924e645dfad494c9129"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_category" DROP CONSTRAINT "FK_494ef7ec4fdfe88460918524b51"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_meta" DROP CONSTRAINT "FK_97c47962541d9faa1070208829f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post" DROP CONSTRAINT "FK_5c1cf55c308037b5aca1038a131"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_comment" DROP CONSTRAINT "FK_c7fb3b0d1192f17f7649062f672"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_346168a19727fca1b1835790a1"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_444c1b4f6cd7b632277f557935"`,
    );
    await queryRunner.query(`DROP TABLE "post_tag"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_08d685cc924e645dfad494c912"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_494ef7ec4fdfe88460918524b5"`,
    );
    await queryRunner.query(`DROP TABLE "post_category"`);
    await queryRunner.query(`DROP TABLE "post_meta"`);
    await queryRunner.query(`DROP TABLE "post"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "post_comment"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "tag"`);
  }
}
