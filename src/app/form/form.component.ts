import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'email-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  e_mail: string = '';
  name: string = '';
  message: string = '';

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}

  validate(): void {
    // submit the form et display a modal
    this.logger.log('Mail :' + this.e_mail);
    this.logger.log('Name :' + this.name);
    this.logger.log('Message : ' + this.message);

    const modal = document.getElementById('myModal')!;
    const paragraph = modal.querySelector('p');

    if (paragraph) {
      // If paragraph is not null, update its text content
      const modalContent = `${this.message}`;
      paragraph.textContent = `Form submitted successfully with this content : "${modalContent}`;
    } else {
      // where 'p' element is not found
      console.error('Paragraph element not found in the modal');
      return;
    }

    modal.style.display = 'block';

    // Clear the form
    this.e_mail = '';
    this.name = '';
    this.message = '';

    this.logger.log('Message sent! :)');
  }
  closeModal() {
    // Close the modal
    const modal = document.getElementById('myModal')!;
    modal.style.display = 'none';
  }
}
