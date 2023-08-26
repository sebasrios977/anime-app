import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TopAnimesComponent } from './pages/top-animes/top-animes.component';
import { SeasonAnimesComponent } from './pages/seasons-anime/season-anime';
import { TagsComponent } from './pages/tags/tags.component';
import { AnimeLayoutComponent } from './layout/anime-layout/anime-layout.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavComponent } from './layout/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    TopAnimesComponent,
    SeasonAnimesComponent,
    TagsComponent,
    AnimeLayoutComponent,
    SidebarComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class AnimeModule { }
