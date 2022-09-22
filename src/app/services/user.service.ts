import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from './address.service';
import { UserDataService } from './admin.service';

export interface User {
  name: string,
  age?: number,
  address?: Address
}

export class UserService implements UserDataService {

  private _user: BehaviorSubject<User> = new BehaviorSubject({} as User);

  public readonly user: Observable<User> = this._user.asObservable();

  constructor () {
    this._user.next({
      name: "User service",
      age: 40,
      address: {
        street: "Avenida Paulista",
        number: 20
      }
    })
  }
}
