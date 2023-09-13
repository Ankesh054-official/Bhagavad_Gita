import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  
  @Input() dataFromParent: any = {};

  public paramForChild: any = {};

  public pageData: boolean = false;

  public lstPageData: boolean = false;
  public currentPageData: boolean = false;
  public nxtPageData: boolean = false;

  public hindiCounting: ReadonlyArray<string> = ["०","१", "२", "३", "४", "५", "६", "७", "८", "९"];

  constructor() { }

  ngOnInit(): void {

    this.prepareParamsForChild(this.dataFromParent);

    // For demo purpose 
    this.pageData = true;
    this.lstPageData = true;
    this.currentPageData = true;
    this.nxtPageData = true;


  }

  prepareParamsForChild(dataFromParent: any): void {
    this.paramForChild = dataFromParent;
    this.paramForChild["hindiCounting"] = this.hindiCounting;

    // To-Do 
    // Need of chapter and verse in child component.
    
    // this.paramForChild["slok"]["slok"] = dataFromParent["slok"]["slok"];

    // Need of slok value from api 
    //Need for this this.paramForChild["slok"]["transliteration"] = dataFromParent["slok"]["transliteration"];

    // this.paramForChild["slok"]["tej"]["ht"] = data from api["tej"]["ht"]
    // Need of "tej"'s value from api
  }

}
