import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePage } from './pages/home.page';
import { HomePageModule } from './pages/home.page-module';
import { KontaktPageModule } from './pages/kontakt.page-module';

const routes: Routes = [{ 
        path: 'about-us', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'kontakt', 
        loadChildren: () => KontaktPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }