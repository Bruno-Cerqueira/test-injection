import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/profile/address/address.component';
import { AdminService, UserToken } from './services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { ApplyServiceDirective } from './directives/apply-service.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddressComponent,
    ApplyServiceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: UserToken,
      useClass: ClientService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
