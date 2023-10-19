import { Component,OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'email-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  e_mail : string = '';
  name : string = '';
  message: string = '';

  constructor(private logger: LoggerService) { }

  ngOnInit() : void{
 
  }


  validate(): void {
    
    this.logger.log('Mail :' + this.e_mail);

    this.logger.log('Name :' + this.name);

    this.logger.log('Message : ' + this.message);

    this.e_mail = '';

    this.name = '';

    this.message = '';

    this.logger.log('Message sent! :)');
  }
}
