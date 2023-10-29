import { Component ,OnInit } from '@angular/core';
import { Users } from '../users.list';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Observable<Users> | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.showUsers();
  }

  showUsers() {
    this.users = this.userService.getUsers();
  }
}
