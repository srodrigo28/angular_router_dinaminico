import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
    private readonly _http = inject(HttpClient);

  private readonly url = 'https://jsonplaceholder.typicode.com/users/';

    getUser(userId: string): Observable<IUser[]> {
        return this._http.get<IUser[]>(this.url + userId);
    }

    getOneUsers(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this.url.slice(0, -1));
      }
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
}