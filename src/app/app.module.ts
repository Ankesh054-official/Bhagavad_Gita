import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { SinglePageComponent } from './components/page/single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
