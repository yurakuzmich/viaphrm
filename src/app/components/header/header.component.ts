import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language: string;
  isBurgerMenuOpened = false;

  @ViewChild('burgerCheck') checkBox: any;

  constructor(private translocoService: TranslocoService) {
    this.language = this.translocoService.getDefaultLang();
   }

  ngOnInit(): void {}

  onLanguageSwitch() {
    this.language = this.language === 'en' ? 'de' : 'en';
    this.translocoService.setActiveLang(this.language);
  }

  onBurgerClick() {
    this.checkBox.nativeElement.checked = !this.checkBox.nativeElement.checked;
  }
}
