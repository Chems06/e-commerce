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
    console.log('Open modal');

    if (paragraph) {
      // If paragraph is not null, update its text content
      paragraph.innerHTML  = `Le nom de l'article est :  ${product.name} 
      <br> c'est un ${product.description}
      <br> son prix est de ${product.price}`;   
     } else {
      // where 'p' element is not found
      console.error('Paragraph element not found in the modal');
      return;
    }

    modal.style.display = 'block';

  }
  closeModal() {
    // Close the modal
    console.log('Closing modal');
    const modal = document.getElementById('myModal')!;
    modal.style.display = 'none';
  }
}