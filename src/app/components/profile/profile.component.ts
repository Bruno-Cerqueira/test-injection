import { Component, inject, Inject, OnInit, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService, UserToken } from 'src/app/services/admin.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [
    {
      provide: UserToken,
      useClass: UserService
    }
  ]
})
export class ProfileComponent {
  user$: Observable<User> | null = null;

  constructor(@Inject(UserToken) userService: UserDataService) { 
    this.user$ = userService.user
  }
}
