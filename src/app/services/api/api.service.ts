import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiPath: string = environment.apiPath;

  constructor(private http: HttpClient) { }


  getChapterDetails(data: { "chapter": number }): any {
    // To get the details of specified chapter (like: no of verse etc.).
    console.warn(this.apiPath + `chapter/${data.chapter}`);
    return this.http.get(this.apiPath + `chapter/${data.chapter}`);
  }

  getSlok(data: { "chapter": number, verse: number }): any {
    // To get the data of specified chapter and verse.

    return this.http.get(this.apiPath + `slok/${data.chapter}/${data.verse}`);
  }

}
