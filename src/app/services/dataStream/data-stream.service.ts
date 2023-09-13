import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStreamService {

  // Observable Data Source
  private chapterData = new Subject<any>();

  private preChapterData = new Subject<any>();
  private currentChapterData = new Subject<any>();
  private nxtChapterData = new Subject<any>();

  // Observable Data Stream
  chapterDataStream = this.chapterData.asObservable();

  preChapterDataStream = this.preChapterData.asObservable();
  currentChapterDataStream = this.currentChapterData.asObservable();
  nxtChapterDataStream = this.nxtChapterData.asObservable();


  // Service Stream Command
  chapterDetailsStream(data: any): void {
    // To Stream Details related to a specified chapter.

    this.chapterData.next(data);
  }

  preChapterStream(data: any): void {
    // To Stream Previous chapter's data.

    this.preChapterData.next(data);
  }

  nxtChapterStream(data: any): void {
    // To Steam Next chapter's data.

    this.nxtChapterData.next(data);
  }

  constructor() { }
}
