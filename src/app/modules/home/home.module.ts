import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';
import { NavModule } from '../nav/nav.module';
import { FooterModule } from '../footer/footer.module';
import { SlideModule } from '../slide/slide.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    NavModule,
    FooterModule,
    SlideModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
