import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  topContact: {topImg: string, title: string, description: string};
  contactInfo: {title: string, address: string, telephone: string};
  constructor(private contact: ContactService) { }

  ngOnInit() {
    this.topContact = this.contact.contactBasic;
    this.contactInfo = this.contact.contactInfo;
  }

}
