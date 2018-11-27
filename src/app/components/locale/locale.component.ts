import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';;

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {


  date = new Date();
  lang: string;
  devise: string;
  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
    console.log(this.locale);
    this.lang = this.locale;
  }
  public selectedLang(lang: string): void {
    this.lang = lang;
  }

  public selectedCurrency(curr: string): void {
    this.devise = curr;
  }
}
