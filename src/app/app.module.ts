import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/profile/address/address.component';
import { AdminService, UserToken } from './services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddressComponent
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
      useClass: AdminService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
