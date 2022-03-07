import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePage } from './pages/home.page';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, AboutUsPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
