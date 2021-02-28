import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  property = '';
  constructor() { }

  ngOnInit(): void {
  }
}
