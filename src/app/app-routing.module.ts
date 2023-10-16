import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
