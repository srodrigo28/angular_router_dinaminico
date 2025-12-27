import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
    private readonly _http = inject(HttpClient);

    getUserPosts(userId: string): Observable<IUser[]> {
        return this._http.get<IUser[]>('https://jsonplaceholder.typicode.com/users/'+userId);
    }
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
}