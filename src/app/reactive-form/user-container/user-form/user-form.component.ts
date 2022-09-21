import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @Input() user!: User | null;

  public formUser: FormGroup = this.fb.group({
    name: [null, Validators.required],
    age: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.formUser.setValue({
      name: this.user?.name,
      age: this.user?.age
    })
  }
}
