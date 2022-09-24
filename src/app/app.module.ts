import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/profile/address/address.component';
import { UserToken } from './services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { ClientService } from './services/client.service';
import { ApplyServiceDirective } from './directives/apply-service.directive';
import { MultiDirectiveComponent } from './multi-directive/multi-directive.component';
import { ExampleComponent } from './multi-directive/example/example.component';
import { EMPLOYEE_LIST } from './services/employee-token';
import { ArtEmployeeService } from './services/art-employee.service';
import { ScienceEmployeeService } from './services/science-employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddressComponent,
    ApplyServiceDirective,
    MultiDirectiveComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormModule
  ],
  providers: [
    {
      provide: UserToken,
      useClass: ClientService
    },
    [
      { provide: EMPLOYEE_LIST, useClass: ArtEmployeeService, multi: true },
      { provide: EMPLOYEE_LIST, useClass: ScienceEmployeeService, multi: true }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
