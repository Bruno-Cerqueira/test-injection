import { Directive, Inject } from '@angular/core';
import { tap } from 'rxjs';
import { UserDataService, UserToken } from '../services/admin.service';
import { ClientService } from '../services/client.service';

@Directive({
  selector: '[appApplyService]',
  providers: [
    {
      provide: UserToken,
      useClass: ClientService
    }
  ]
})
export class ApplyServiceDirective {

  constructor( @Inject(UserToken) clientService: UserDataService) {
    console.log('log');
    clientService.user.pipe(tap(console.log));
  }

}
