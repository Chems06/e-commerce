import { Component,OnInit } from '@angular/core';
import { Products } from '../products.list';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<Products> | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.showProducts();
  }

  showProducts() {
    this.products = this.productService.getProducts();
  }
}