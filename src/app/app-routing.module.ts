import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import {CabeceraComponent} from'./cabecera/cabecera.component'
import {HomeComponent} from'./home/home.component'
import {ListasComponent} from'./listas/listas.component'
const routes: Routes = [
  { path: "", component: AppComponent},
  { path: "login", component: LoginComponent},
  { path: "cabecera", component: CabeceraComponent},
  { path: "Home", component: HomeComponent},
  { path: "Listas", component: ListasComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
