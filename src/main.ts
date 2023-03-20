import { NestFactory } from '@nestjs/core';
import { AppModule } from '../dist/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3200);
}
bootstrap();
