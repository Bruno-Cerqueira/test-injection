import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Address {
  street?: string,
  number?: number
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private _address: BehaviorSubject<Address> = new BehaviorSubject({
      street: "Avenida Paulista",
      number: 20
  } as Address);

  public readonly user: Observable<Address> = this._address.asObservable();
}
