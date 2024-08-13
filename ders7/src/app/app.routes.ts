import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { TelComponent } from './components/tel/tel.component';
import { MailComponent } from './components/mail/mail.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import {
  canActivateChild,
  canActivateGuard,
  canDeactivateGuard,
  isAdminGuard,
  isUserGuard,
  photosResolver,
} from './guards/guards';
import { ProductsComponent } from './components/products/products.component';
import { provideHttpClient } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: 'dashboard', component: AdminComponent, canMatch: [isAdminGuard] },
  { path: 'dashboard', component: UserComponent, canMatch: [isUserGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'home/:mert', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    data: { key1: 'value1', key2: 'value2' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [canActivateGuard],
    canDeactivate: [canDeactivateGuard],
    children: [
      {
        path: 'iletisim/:id',
        component: IletisimComponent,
        canActivateChild: [canActivateChild],

        children: [
          { path: '', redirectTo: 'tel', pathMatch: 'full' },
          { path: 'tel', component: TelComponent },
          { path: 'mail', component: MailComponent },
        ],
      },
    ],
  },
  {
    path: 'product',
    providers: [provideHttpClient()],
    component: ProductsComponent,
    resolve: { photos: photosResolver },
  },

  { path: '**', component: ErrorComponent },
];
