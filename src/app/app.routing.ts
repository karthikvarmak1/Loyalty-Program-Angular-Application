import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnrollComponent } from './enroll/enroll.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
    { path : '', component : EnrollComponent },
    { path : 'enroll', component : EnrollComponent },
    { path : 'login', component : LoginComponent },
    { path : 'dashboard/:userId', component : DashboardComponent },
    { path : 'profile/:userId', component : ProfileComponent },
    { path : 'wallet/:userId', component : WalletComponent },
    { path: 'products', component : ProductsComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
