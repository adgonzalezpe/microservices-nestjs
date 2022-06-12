import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MicroserviceDatabaseModule } from './microservice-database/microservice-database.module';
import config from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config],
            isGlobal: true,
        }),
        ProductModule,
        MicroserviceDatabaseModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
