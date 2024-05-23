import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Milenio-API Documentation')
    .setDescription('Milenio-API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);

  // Servir arquivos estáticos do Swagger UI
  app.useStaticAssets(join(__dirname, '..', 'node_modules', 'swagger-ui-dist'));

  await app.listen(3333);
}
bootstrap();
