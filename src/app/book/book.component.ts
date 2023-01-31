import { Book } from './../book.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'pcard-uts-workshop-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book?: Book;
  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();

  addToCartClicked() {
    
    this.addToCart.emit(this.book);
  }
}
