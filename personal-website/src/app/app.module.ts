import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home-page/home/home.component';
import { GlobalsService } from './services/globals.service';
import { ContactComponent } from './views/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProjectsComponent } from './views/home-page/home/projects/projects.component';
import { EducationComponent } from './views/home-page/home/education/education.component';
import { WorkComponent } from './views/home-page/home/work/work.component';
import { PublicationsComponent } from './views/home-page/home/publications/publications.component';
import { SkillsComponent } from './views/home-page/home/skills/skills.component';
import { HonorsComponent } from './views/home-page/home/honors/honors.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    EducationComponent,
    WorkComponent,
    PublicationsComponent,
    SkillsComponent,
    HonorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
