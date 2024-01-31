import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Designia')
    .setDescription(
      'Designia es una aplicación web que ofrece una solución integral para la gestión de proyectos arquitectónicos, desde la concepción hasta la entrega. Con Designia, los arquitectos pueden crear y compartir diseños, planificar y asignar tareas, comunicarse con los clientes y colaboradores, controlar el presupuesto y el cronograma, y supervisar el progreso y la calidad de los proyectos.',
    )
    .setVersion('0.0.1')
    .addTag('Auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
