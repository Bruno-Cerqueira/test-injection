import { Component, inject, Inject, OnInit, SkipSelf } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';
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
export class ProfileComponent implements OnInit {
  user$: Observable<User> | null = null;
  formUser: FormGroup = this.formBuilder.group({});

  constructor(@Inject(UserToken) userService: UserDataService, private formBuilder: FormBuilder) { 
    this.user$ = userService.user.pipe(tap((value)=> {
      this.formUser.patchValue(value)
    }))
  }

  ngOnInit() {
    this.formUser = this.formBuilder.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
    })
  }
}
