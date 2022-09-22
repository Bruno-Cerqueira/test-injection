import { Component, Host, Inject, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { Address } from 'src/app/services/address.service';
import { UserDataService, UserToken } from 'src/app/services/admin.service';
import { ClientService } from 'src/app/services/client.service';
import { User } from 'src/app/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  constructor(@Inject(UserToken) private clientService: UserDataService) { }

  ngOnInit(): void {
    this.clientService?.user.subscribe(console.log)
  }
  @Input() address: Address | null = {};
}
