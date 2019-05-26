import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private gs: GlobalsService) { 
    this.titleService.setTitle(this.gs.HOME_TITLE);
  }

  ngOnInit() {
  }

}
