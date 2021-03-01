import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor(pageTitle: Title) {
    pageTitle.setTitle('Viapharm: Development');
  }

  ngOnInit(): void {
  }

}
