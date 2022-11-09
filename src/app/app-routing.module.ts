import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PVCComponent} from './pvc/pvc.component';
import {ALComponent} from './al/al.component';
import { PodiznoKlizniComponent } from './podizno-klizni/podizno-klizni.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: 'HOME', component: HomeComponent},
  {path: 'PVC', component: PVCComponent},
  {path: 'AL', component: ALComponent},
  {path: 'Podizno-Klizni', component: PodiznoKlizniComponent},
  {path: 'Admin', component:AdminComponent},
  {path: '', redirectTo: '/HOME', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
