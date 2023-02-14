import { DiscountPipe } from './../discount.pipe';
import { BOOKS_MOCK } from './../books.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { By } from '@angular/platform-browser';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent, DiscountPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render book', () => {
    component.book = BOOKS_MOCK[0];

    fixture.detectChanges();

    const title: HTMLDivElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain(BOOKS_MOCK[0].title);

    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toBe(BOOKS_MOCK[0].previewImgUrl)
  });

  it('should add to cart', () => {
    // arrage
    jest.spyOn(component.addToCart, 'emit');
    
    // act
    component.addToCartClicked();

    // assert
    expect(component.addToCart.emit).toHaveBeenCalledTimes(1);

  });

  it('should add to cart - 2nd option', () => {
    component.addToCart.subscribe((book) => {
      expect(book).toBe(BOOKS_MOCK[0])
    });

    component.addToCartClicked();
  })
});
