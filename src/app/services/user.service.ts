import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from './address.service';

export interface User {
  name?: string,
  age?: number,
  address?: Address
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<User> = new BehaviorSubject({});

  public readonly user: Observable<User> = this._user.asObservable();

  constructor () {
    this._user.next({
      name: "Junior",
      age: 40,
      address: {
        street: "Avenida Paulista",
        number: 20
      }
    })
  }
}
