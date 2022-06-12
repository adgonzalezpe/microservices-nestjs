import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, map } from 'rxjs';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { Product } from '../schema/product.schema';

@Injectable()
export class ProductService {
    constructor(@Inject('DATABASE_SERVICE') private client: ClientProxy) {}

    async onModuleInit() {
        console.log(`The module of PRODUCTS has been initialized.`);
    }

    async getProducts(): Promise<Product> {
        const products = await firstValueFrom(
            this.client.send({ pattern: 'get_products' }, {}).pipe(),
        );

        return products;
    }

    async getProduct(id: number): Promise<Product> {
        const product = await firstValueFrom(
            this.client.send({ pattern: 'get_product' }, id).pipe(),
        );

        return product;
    }

    createProduct(data: CreateProductDTO): void {
        this.client.emit('create_product', data);
    }

    updateProduct(data: UpdateProductDTO): void {
        this.client.emit('update_product', data);
    }

    removeProduct(id: number): void {
        this.client.emit('update_product', id);
    }
}
