import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
  providers: [
    {
      provide: UserService
    }
  ]
})
export class UserContainerComponent implements OnInit {
  public user$!: Observable<User>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.user
  }

}
