import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProductDTO {
    @ApiProperty({
        required: true,
        type: 'string',
        description: `Product's name`,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        required: true,
        type: 'string',
        description: `Product's description`,
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        required: true,
        type: 'number',
        description: `Product's price`,
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        required: true,
        type: 'number',
        description: `Product's stock`,
    })
    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @ApiProperty({
        required: true,
        type: 'string',
        description: `Product's url image`,
    })
    @IsString()
    @IsNotEmpty()
    image: string;
}

export class UpdateProductDTO {
    @ApiProperty({
        required: true,
        type: 'number',
        description: `Product's ID`,
    })
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @ApiProperty({
        required: false,
        type: 'string',
        description: `Product's name`,
    })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({
        required: false,
        type: 'string',
        description: `Product's description`,
    })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({
        required: false,
        type: 'number',
        description: `Product's price`,
    })
    @IsNumber()
    @IsOptional()
    price: number;

    @ApiProperty({
        required: false,
        type: 'number',
        description: `Product's stock`,
    })
    @IsNumber()
    @IsOptional()
    stock: number;

    @ApiProperty({
        required: false,
        type: 'string',
        description: `Product's url image`,
    })
    @IsString()
    @IsOptional()
    image: string;
}
