import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { productdto } from './product.dto';
import { Product } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addproduct(@Body() createProduct: productdto): Promise<Product> {
    return await this.productService.addProduct(createProduct);
  }
}
