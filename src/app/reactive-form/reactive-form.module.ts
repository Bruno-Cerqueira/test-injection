import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserFormComponent } from './user-container/user-form/user-form.component';

@NgModule({
  declarations: [
    UserContainerComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserContainerComponent
  ]
})
export class ReactiveFormModule { }
