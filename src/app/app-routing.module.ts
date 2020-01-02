import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SightsComponent } from './sights/sights.component';


const routes: Routes = [
  {path: '',  component: SightsComponent, pathMatch: 'full'},
  {path: 'blog', component: HomeComponent},
  {path: 'sites', component: SightsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
