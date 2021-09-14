import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder().setTitle('Boo REST API').build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs/', app, document);

  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
}

bootstrap();
