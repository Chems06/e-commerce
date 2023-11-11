import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'email-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  Form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.Form = this.formBuilder.group({
      name: ['', [Validators.required]],
      e_mail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }
  validate(): void {
    const modal = document.getElementById('myModal')!;
    const paragraph = modal.querySelector('p');

    if (paragraph) {
      const modalContent = `${this.Form.value.message}`;
      const modalUser = `${this.Form.value.name}`;
      paragraph.textContent = `Form submitted successfully ${modalUser}, your message is the following : "${modalContent}"`;
    } else {
      return;
    }

    modal.style.display = 'block';

    this.Form.value.e_mail = '';
    this.Form.value.name = '';
    this.Form.value.message = '';
  }
  closeModal() {
    const modal = document.getElementById('myModal')!;
    modal.style.display = 'none';
  }
}
