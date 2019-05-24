import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = "Abdul Lateef Haamid";
  job: string = "Software Engineer";
  company: string = "Yelp";

  constructor() { }

  ngOnInit() {
  }

}
