import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { Product } from './entity/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
