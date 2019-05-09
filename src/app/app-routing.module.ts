import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent },
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
