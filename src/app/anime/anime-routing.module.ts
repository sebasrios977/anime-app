import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeLayoutComponent } from './layout/anime-layout/anime-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TopAnimesComponent } from './pages/top-animes/top-animes.component';
import { SeasonAnimesComponent } from './pages/seasons-anime/season-anime';
import { AnimeComponent } from './pages/anime/anime.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'top-animes', component: TopAnimesComponent },
      { path: 'season-animes', component: SeasonAnimesComponent },
      { path: 'anime/:id', component: AnimeComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
