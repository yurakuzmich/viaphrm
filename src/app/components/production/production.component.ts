import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  constructor(pageTitle: Title) {
    pageTitle.setTitle('Viapharm: Production');
  }

  ngOnInit(): void {
  }

}
