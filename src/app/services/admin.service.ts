import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.service';

export interface UserDataService {
  user: Observable<User>
}
export var UserToken = new InjectionToken<UserDataService>( "User Data" );

export class AdminService implements UserDataService {
  private _user: BehaviorSubject<User> = new BehaviorSubject({});



  public readonly user: Observable<User> = this._user.asObservable();

  constructor () {
    this._user.next({
      name: "Junior",
      age: 20,
      address: {
        street: "Avenida Paulista",
        number: 20
      }
    })
  }
}
