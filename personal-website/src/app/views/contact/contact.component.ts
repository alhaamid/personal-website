import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title, private gs: GlobalsService) { 
    this.titleService.setTitle(gs.CONTACT_TITLE);
  }

  ngOnInit() {
  }

}
