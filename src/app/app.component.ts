import { Book } from './book.interface';
import { BooksService } from './books.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pcard-uts-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  books$: Observable<Book[]>;
  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.getBooks('Angular')
  }
}
