import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  @Input() dataFromParent: any = {};

  public sanskritTitle: string = "";
  public englishTitle: string = "";
  public hindiCounting: any = "";

  public chapter: number = 0;
  public shloka: number = 0;

  public chapterNo: string = "";
  public verseNo: string = "";
  public slok: string = "";
  
  public transliteration: string = "";
  public hindiTranslation: string = "";
  public simplification: string = "";

  constructor() { }

  ngOnInit(): void {

    this.unPackParameters(this.dataFromParent);

  }

  unPackParameters(dataFromParent: any): void {
    this.sanskritTitle = dataFromParent["Titles"]["sanskritTitle"];
    this.englishTitle = dataFromParent["Titles"]["englishTitle"];
    this.hindiCounting = dataFromParent["hindiCounting"];


    // Demo chapter and verse change it after you get from api.

    this.chapter = 1;
    this.shloka = 9;

    this.chapterNo = this.hindiCounting[1];
    this.verseNo = this.hindiCounting[9];


    // this.slok = dataFromParent["slok"]["slok"];
    this.slok = "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः | \n आचरत्यात्मनः श्रेयस्ततो याति परां गतिम् ||१६-२२||";
    // this.slok.replace("\n","<br>");
    
    // this.transliteration = dataFromParent["slok"]["transliteration"];
    this.transliteration = "etairvimuktaḥ kaunteya tamodvāraistribhirnaraḥ .\nācaratyātmanaḥ śreyastato yāti parāṃ gatim ||16-22||";

    // this.hindiTranslation = dataFromParent["slok"]["tej"]["ht"];
    this.hindiTranslation = "।।16.22।। हे कौन्तेय ! नरक के इन तीनों द्वारों से विमुक्त पुरुष अपने कल्याण के साधन का आचरण करता है और इस प्रकार परा गति को प्राप्त होता है।।";

    // this.simplification = dataFromParent["slok"]["gambir"]["et"];
    this.simplification = "16.22 O son of Kunti, a person who is free from these three doors to darkness strives for the good of the soul. Thery he attains the highest Goal.";
  }

}
