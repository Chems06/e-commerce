import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trendy Stitches';
  openModal() : void{
    const modal = document.getElementById('myModal')!;
    const paragraph = modal.querySelector('p');

    if (paragraph) {
      paragraph.innerHTML  = `En cours de construction.... :c`;   
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
