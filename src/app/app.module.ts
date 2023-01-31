import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { DiscountPipe } from './discount.pipe';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, BookComponent, DiscountPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
