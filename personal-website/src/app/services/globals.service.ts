import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  public CONTACT_TITLE: string = "Contact Abdul";
  public HOME_TITLE: string = "Abdul Lateef Haamid";
  public NAME: string = "Abdul Lateef Haamid";
  public JOB: string = "Software Engineer";
  public COMPANY: string = "Yelp";

  constructor() { }
}
