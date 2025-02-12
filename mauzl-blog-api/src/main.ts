import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Mauzl API')
    .addTag('Mauzl')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);
  app.use((req, res, next) => {
    if (req.url === '/api/openapi') {
      res.type('application/json');
      res.send(document);
      return;
    }
    next();
  });

  app.setGlobalPrefix('api');

  await app.listen(4001);
}
bootstrap();
