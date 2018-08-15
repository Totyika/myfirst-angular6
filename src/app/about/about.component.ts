import { Component, OnInit } from '@angular/core';
import {AboutService} from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutContent: {topImg: string, title: string, text: string};
  testimonials: {author: string, text: string}[];
  constructor(private aboutInner: AboutService) { }

  ngOnInit() {
    this.aboutContent = this.aboutInner.aboutUsInner;
    this.testimonials = this.aboutInner.testimonials;
  }

}
