import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Observable<Product> | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.showProduct();
  }

  showProduct() {
    this.product = this.productService.getProduct();
  }
}