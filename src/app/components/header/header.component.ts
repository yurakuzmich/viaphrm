import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language = 'de';

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
  }

  onLanguageSwitch() {
    this.language = this.language === 'en' ? 'de' : 'en';
    this.translocoService.setActiveLang(this.language);
  }
}
