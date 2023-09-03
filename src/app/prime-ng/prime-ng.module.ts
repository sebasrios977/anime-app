import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    ProgressSpinnerModule,
  ]
})
export class PrimeNgModule { }
