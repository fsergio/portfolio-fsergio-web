import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slide } from '../model/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(protected httpClient: HttpClient) {

  }

  getSlides() {
    return this.httpClient.get<Slide[]>('../assets/data/slide.json');
  }
}
