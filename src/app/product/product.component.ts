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

  openModal(product : any) : void{
    const modal = document.getElementById('myModal')!;
    const paragraph = modal.querySelector('p');

    if (paragraph) {
      paragraph.innerHTML  = `Le nom de l'article est :  ${product.name} 
      <br> c'est un ${product.description}
      <br> son prix est de ${product.price} euros`;   
     } else {
      return;
    }

    modal.style.display = 'block';

  }
  closeModal() {
    const modal = document.getElementById('myModal')!;
    modal.style.display = 'none';
  }
}