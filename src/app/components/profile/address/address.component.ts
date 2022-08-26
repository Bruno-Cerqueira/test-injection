import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/services/address.service';
import { User } from 'src/app/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() address: Address | null = {};
}
