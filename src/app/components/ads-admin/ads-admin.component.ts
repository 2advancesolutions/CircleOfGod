import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ads-admin',
  templateUrl: './ads-admin.component.html',
  styleUrls: ['./ads-admin.component.scss'],
    animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class AdsAdminComponent implements OnInit {
  constructor(private productService: ProductService) { }
  public display:  boolean = false;
  public products: Product[] = [];
  public responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  ngOnInit(): void {
    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
  }

}
