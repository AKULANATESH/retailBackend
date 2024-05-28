import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { productdto } from './product.dto';
import { Product } from './product.schema';
@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModule: Model<Product>,
  ) {}

  async create(product: productdto): Promise<Product> {
    const newProduct = await this.productModule.create(product);
    return newProduct;
  }
}
