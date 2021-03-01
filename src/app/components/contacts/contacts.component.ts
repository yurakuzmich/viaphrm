import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  property = '';

   constructor(pageTitle: Title) {
    pageTitle.setTitle('Viapharm: Contacts and Location');
  }

  ngOnInit(): void {
  }
}
