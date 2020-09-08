import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, AuthorsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
