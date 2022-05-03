import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('TC2005/CEM/401 API')
  .setDescription('A sample API for class')
  .setVersion('0.1')
  .build()

  await app.listen(3000);
}
bootstrap();
