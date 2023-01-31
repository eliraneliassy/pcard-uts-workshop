import { Book } from './book.interface';
import { BooksService } from './books.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { asapScheduler, asyncScheduler, delay, Observable, observeOn, of } from 'rxjs';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';

@Component({
  selector: 'pcard-uts-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  books$: Observable<Book[]>;
  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.getBooks('Angular');

    console.log(1);
    setTimeout(() => console.log(2), 0);
    Promise.resolve(3).then(console.log);
    of(4, asyncScheduler).pipe()
      .subscribe(console.log);
    console.log(5);
  }
}
