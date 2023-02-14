import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { DiscountPipe } from './discount.pipe';
import { ChangeColorDirective } from './change-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    BookComponent,
    DiscountPipe,
    ChangeColorDirective,
    ItemPreviewComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
