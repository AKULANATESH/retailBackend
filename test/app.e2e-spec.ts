import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('ProductModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /product', async () => {
    const addProduct = {
      product_name: `${new Date().toISOString()}.nikweesd`,
      product_price: 15000,
      product_description: 'more style more fashion',
      product_type: 'shoes',
    };
    const response = await request(app.getHttpServer())
      .post('/product')
      .send(addProduct)
      .expect(201);

    expect(response.body).toMatchObject({
      product_name: addProduct.product_name,
      product_price: addProduct.product_price,
      product_description: addProduct.product_description,
      product_type: addProduct.product_type,
      _id: expect.any(String),
    });
  });

  // it('POST /product', async () => {
  //   const addproduct = {
  //     product_name: 345.776,
  //     product_price: 2300,
  //     product_description: 'more style more fashion',
  //     product_type: 'shoes',
  //   };
  //   const response = await request(app.getHttpServer())
  //     .post('/product')
  //     .send(addproduct)
  //     .expect(400);
  // });
});
