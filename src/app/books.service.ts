import { Book } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  constructor(private http: HttpClient) { }

  getBooks(query: string): Observable<Book[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('q', query);

    return this.http.get<any>(this.BASE_URL, { params })
    .pipe(
      map((res: any) => res.items),
      map((items: any[]) => items.map((item: any) => ({
        title: item.volumeInfo.title,
        previewImgUrl: item.volumeInfo.imageLinks.thumbnail,
        price: item.volumeInfo.pageCount,
        description: item.volumeInfo.description
      })))
    );
  }
}
