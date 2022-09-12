import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './user-container/user-container.component';

@NgModule({
  declarations: [
    UserContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserContainerComponent
  ]
})
export class ReactiveFormModule { }
