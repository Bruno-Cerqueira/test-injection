import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDataService } from './admin.service';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements UserDataService {

  private _user: BehaviorSubject<User> = new BehaviorSubject({} as User);

  public readonly user: Observable<User> = this._user.asObservable();

  constructor () {
    this._user.next({
      name: "Client Service",
      age: 60,
      address: {
        street: "client Paulista",
        number: 10
      }
    })
  }
}
