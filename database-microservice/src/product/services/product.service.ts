import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async getProducts(): Promise<Product[]> {
        const products = await this.productRepository.find();
        if (!products) return null;
        return products;
    }

    async getProduct(id: number): Promise<Product> {
        const product = await this.productRepository.findOneBy({ id });
        if (!product) return null;
        return product;
    }

    async createProduct(data: CreateProductDTO): Promise<Product> {
        const product = await this.productRepository.findOneBy({
            name: data.name,
        });
        if (product) return null;

        const newProduct = this.productRepository.create(data);
        return await this.productRepository.save(newProduct);
    }

    async updateProduct(data: UpdateProductDTO): Promise<Product> {
        const product = await this.productRepository.findOneBy({ id: data.id });
        if (!product) return null;

        this.productRepository.merge(product, data);
        return await this.productRepository.save(product);
    }

    async removeProduct(id: number): Promise<Product> {
        const product = await this.productRepository.findOneBy({ id: id });
        if (!product) return null;
        return await this.productRepository.remove(product);
    }
}
