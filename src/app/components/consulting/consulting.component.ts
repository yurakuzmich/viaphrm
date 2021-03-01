import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {

  constructor(pageTitle: Title) {
    pageTitle.setTitle('Viapharm: Consulting');
  }

  ngOnInit(): void {
  }

}
