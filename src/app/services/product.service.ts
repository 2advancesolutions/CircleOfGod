import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  public status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  public productNames: string[] = [
    'Bamboo Watch',
    'Black Watch',
    'Blue Band',
    'Blue T-Shirt',
    'Bracelet',
    'Brown Purse',
    'Chakra Bracelet',
    'Galaxy Earrings',
    'Game Controller',
    'Gaming Set',
    'Gold Phone Case',
    'Green Earbuds',
    'Green T-Shirt',
    'Grey T-Shirt',
    'Headphones',
    'Light Green T-Shirt',
    'Lime Band',
    'Mini Speakers',
    'Painted Phone Case',
    'Pink Band',
    'Pink Purse',
    'Purple Band',
    'Purple Gemstone Necklace',
    'Purple T-Shirt',
    'Shoes',
    'Sneakers',
    'Teal T-Shirt',
    'Yellow Earbuds',
    'Yoga Mat',
    'Yoga Set',
  ];
  public getProductsSmall() {
    return this.http
      .get<any>('assets/products-small.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  public getProducts() {
    return this.http
      .get<any>('assets/products.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  public getProductsWithOrdersSmall(): Promise<Product[]> {
    return this.http
      .get<any>('assets/products-orders-small.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  public generatePrduct(): Product {
    const product: any = {
      id: this.generateId(),
      name: this.generateName(),
      description: 'Product Description',
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: 'Product Category',
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating(),
    };
    product.image =
      product.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
    return product;
  }

  public generateId(): string {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  public generateName(): string {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  public generatePrice(): number {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }

  public generateQuantity(): number {
    return Math.floor(Math.random() * Math.floor(75) + 1);
  }

  public generateStatus(): string {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  public generateRating(): number {
    return Math.floor(Math.random() * Math.floor(5) + 1);
  }
}


