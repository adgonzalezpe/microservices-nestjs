import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import config from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            load: [config],
            isGlobal: true,
        }),
        DatabaseModule,
        ProductModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
