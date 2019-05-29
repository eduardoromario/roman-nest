import { NestFactory } from '@nestjs/core';
import { RomanModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(RomanModule);
  await app.listen(3000);
}
bootstrap();
