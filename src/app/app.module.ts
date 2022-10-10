import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ListContainerComponent } from './components/container/list-container/list-container.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { StoreModule } from '@ngrx/store';
import { StoreDataModule } from './store-data/store-data.module';
import { CounterContainerComponent } from './components/container/counter-container/counter-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddressComponent,
    ApplyServiceDirective,
    MultiDirectiveComponent,
    ExampleComponent,
    ListContainerComponent,
    CounterContainerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ReactiveFormModule,
    AppRoutingModuleModule,
    StoreModule.forRoot({}),
    StoreDataModule
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
