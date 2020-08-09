import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'colegio', loadChildren: './pages/colegio/colegio.module#ColegioPageModule' },
  // { path: 'siremu', loadChildren: './pages/siremu/siremu.module#SiremuPageModule' },
  // { path: 'eba', loadChildren: './pages/eba/eba.module#EbaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
