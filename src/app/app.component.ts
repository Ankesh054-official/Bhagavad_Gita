import { Component } from '@angular/core';

import { ApiService } from './services/api/api.service';
import { DataStreamService } from './services/dataStream/data-stream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public englishTitle: string = 'Bhagavad Gita';
  public sanskritTitle: string = "श्रीमद्‍भगवद्‍-गीता";

  public paramForChild: any = {};

  public pageData: boolean = false;

  constructor(private api: ApiService,
    private dataStream: DataStreamService) {

  }

  ngOnInit(): void {

    // Preparing parameters for child component.
    this.paramForChild["Titles"] = { "englishTitle": this.englishTitle, "sanskritTitle": this.sanskritTitle };

    //  For the demo purpose
    this.pageData = true;
    
    this.getDetailsOfNextChapter();

    let InitialData ={"currentChapter":0};
    this.dataStream.chapterDetailsStream(InitialData);


  }

  getDetailsOfNextChapter() {
    this.dataStream.chapterDataStream.subscribe((data: any) => {
      
      let payload = {"chapter": (data["currentChapter"]+1)};
      this.api.getChapterDetails(payload).subscribe((data: any) => {
        console.log(data);
        // this.dataStream.chapterDetailsStream(data);
      });

    });

  }

}

