import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceDetalhes {
  private readonly _http = inject(HttpClient);

  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<IUserDetalhes[]> {
    return this._http.get<IUserDetalhes[]>(this.url);
  }
}

export interface IUserDetalhes {
  id: number
  name: string
  username: string
  email: string
}

/** outros
export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
*/