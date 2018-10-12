import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng6-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EnrollComponent } from './enroll/enroll.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProductsComponent } from './products/products.component';
import { NumberPickerComponent } from '../app/services/number-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    EnrollComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    WalletComponent,
    ProductsComponent,
    NumberPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    HttpClientModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
