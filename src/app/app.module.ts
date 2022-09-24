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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
