import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.server_url}users/`);
  }

  addUser(userDetails: any): Observable<IUser> {
    return this.http.post<IUser>(`${environment.server_url}`, userDetails);
  }

  getUserById(id: any): Observable<IUser> {
    return this.http.get<IUser>(`${environment.server_url}users/${id}`);
  }
  updateUserId(id: any, userDetails: {}) {
    return this.http.put<IUser>(`${environment.server_url}`, userDetails);
  }
  deleteUserById(id: any): Observable<IUser> {
    return this.http.delete<IUser>(`${environment.server_url}users/${id}`);
  }
}
