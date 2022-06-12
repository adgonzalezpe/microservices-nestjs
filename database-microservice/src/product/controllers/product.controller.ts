import { Controller, Inject, NotFoundException } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { Product } from '../entity/product.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @MessagePattern({ pattern: 'get_products' })
    getProducts(): Promise<Product[]> {
        return this.productService.getProducts();
    }

    @MessagePattern({ pattern: 'get_product' })
    getProduct(id: number): Promise<Product> {
        return this.productService.getProduct(id);
    }

    @EventPattern('create_product')
    createProduct(data: CreateProductDTO): Promise<Product> {
        return this.productService.createProduct(data);
    }

    @EventPattern('update_product')
    updateProduct(data: UpdateProductDTO): Promise<Product> {
        return this.productService.updateProduct(data);
    }

    @EventPattern('remove_product')
    removeProduct(id: number): Promise<Product> {
        return this.productService.removeProduct(id);
    }
}
