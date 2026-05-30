import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentHelper } from './helper/Environment.helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const environmentHelper = app.get(EnvironmentHelper);
  await app.listen(environmentHelper.AppPort);
}
bootstrap();
