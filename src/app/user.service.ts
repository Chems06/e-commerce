import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users> {
    return this.http.get<Users>(this.apiUrl);
  }
}
