import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TopAnimesComponent } from './pages/top-animes/top-animes.component';
import { SeasonAnimesComponent } from './pages/seasons-anime/season-anime';
import { AnimeLayoutComponent } from './layout/anime-layout/anime-layout.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavComponent } from './layout/nav/nav.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AnimeContentComponent } from './components/anime-content/anime-content.component';
import { AnimeComponent } from './pages/anime/anime.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopAnimesComponent,
    SeasonAnimesComponent,
    AnimeLayoutComponent,
    SidebarComponent,
    NavComponent,
    SpinnerComponent,
    AnimeContentComponent,
    AnimeComponent,
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class AnimeModule { }
