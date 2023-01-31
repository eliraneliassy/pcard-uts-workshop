import { BOOKS_RESPONSE_MOCK } from './books.mock';
import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('BooksService', () => {
  let service: BooksService;
  let httpClient: HttpClient;

  const httpClientMock = {
    get: () => { return of(BOOKS_RESPONSE_MOCK) }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: HttpClient, useValue: httpClientMock
      } ]
    });
    service = TestBed.inject(BooksService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get books from http', () => {
    jest.spyOn(httpClient, 'get');

    service.getBooks('Angualr');

    expect(httpClient.get).toHaveBeenCalledTimes(1);
  })
});
