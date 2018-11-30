import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideRoutingModule } from './slide-routing.module';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports: [
    CommonModule,
    SlideRoutingModule
  ],
  declarations: [
    SlideComponent
  ],
  exports: [
    SlideComponent
  ]
})
export class SlideModule { }
