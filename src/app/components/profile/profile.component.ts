import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user$: Observable<User> | null = null;

  constructor(private userService : UserService) { 
    this.user$ = this.userService.user
  }
}
