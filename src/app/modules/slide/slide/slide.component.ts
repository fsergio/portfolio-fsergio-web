import { Component, OnInit } from '@angular/core';
import { Slide } from '../../../model/slide';
import { HttpClient } from '@angular/common/http';
import { SlideService } from '../../../services/slide.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  // styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  public slides: Slide[];

  constructor(protected httpClient: HttpClient,
              protected slideService: SlideService) {
    this.slides = new Array<Slide>();
  }

  ngOnInit() {
    this.loadSlides();
  }

  loadSlides() {
    this.slideService.getSlides().subscribe(
      result => {
        if (result) {
          this.slides = result;
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
