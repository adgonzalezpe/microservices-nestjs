import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsString()
    @IsNotEmpty()
    image: string;
}

export class UpdateProductDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @IsOptional()
    price: number;

    @IsNumber()
    @IsOptional()
    stock: number;

    @IsString()
    @IsOptional()
    image: string;
}
