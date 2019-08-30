import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { UserGuard } from './user-guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'forbidden',
    component: ForbiddenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
