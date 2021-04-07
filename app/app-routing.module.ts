import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppInfoPage } from './info-page/app.info-page';
import { AppNav } from './index/app.nav';
import { AppTandC } from './t-and-c-page/app.t-and-c';

const routes: Routes = [
  { path: '', redirectTo: 'app.nav', pathMatch: 'full' },
  { path: 'app.nav', component: AppNav },
  { path: 'app.info-page/:title', component: AppInfoPage },
  { path: 'app.t-and-c', component: AppTandC },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }