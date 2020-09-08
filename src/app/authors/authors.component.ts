import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  title = 'Authors';
  authors: string[];
  numAuthors: number;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.numAuthors = this.authors.length;
  }

  ngOnInit(): void {}
}
