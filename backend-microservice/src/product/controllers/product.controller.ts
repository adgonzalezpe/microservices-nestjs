import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductService } from '../services/product.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Product } from '../schema/product.schema';

@ApiTags('products')
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('')
    async getProducts(): Promise<Product> {
        return await this.productService.getProducts();
    }

    @Get('/:id')
    async getProduct(@Param('id') id: number): Promise<Product> {
        return await this.productService.getProduct(id);
    }

    @Post('')
    @ApiBody({ type: CreateProductDTO })
    async createProduct(@Body() payload: CreateProductDTO) {
        await this.productService.createProduct(payload);
    }

    @Put('')
    @ApiBody({ type: UpdateProductDTO })
    async updateProduct(@Body() payload: UpdateProductDTO) {
        await this.productService.updateProduct(payload);
    }

    @Delete('/:id')
    async removeProduct(@Param('id') id: number) {
        await this.productService.removeProduct(id);
    }
}
