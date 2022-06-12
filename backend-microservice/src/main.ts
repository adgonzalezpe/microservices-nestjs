import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const swagger = new DocumentBuilder()
        .setTitle('Backend connected with database by microservice')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, swagger);
    SwaggerModule.setup('docs', app, document);

    await app.listen(3000);
}
bootstrap();
