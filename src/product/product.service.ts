import { Injectable } from '@nestjs/common';
import { productdto } from './product.dto';
import { Product } from './product.schema';
import { ProductRepository } from './product.repo';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async addProduct(newProduct: productdto): Promise<Product> {
    const addedProduct = await this.productRepository.create(newProduct);
    return addedProduct;
  }
}
