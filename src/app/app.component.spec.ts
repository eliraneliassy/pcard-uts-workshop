import { MatDialogModule } from '@angular/material/dialog';
import { DiscountPipe } from './discount.pipe';
import { BookComponent } from './book/book.component';
import { By } from '@angular/platform-browser';
import { BooksService } from './books.service';
import { BOOKS_MOCK } from './books.mock';
import { of, Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent, MockPipe } from 'ng-mocks';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatDialogHarness } from '@angular/material/dialog/testing';


describe('AppComponent', () => {

  const booksServiceMock: BooksService = {
    getBooks: () => {
      // return of(BOOKS_MOCK)
      return new Observable(observer => {
        setTimeout(() => {
          observer.next(BOOKS_MOCK);
          observer.complete()
        }, 2000)
      })
    }
  } as any;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(BookComponent),
        MockPipe(DiscountPipe)
      ],
      imports: [HttpClientTestingModule, MatDialogModule, NoopAnimationsModule],
      providers: [
        { provide: BooksService, useValue: booksServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render books on the component', fakeAsync(() => {
    fixture.detectChanges();
    tick(2001);
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.directive(BookComponent));

    expect(items[0].componentInstance.book).toBe(BOOKS_MOCK[0])
  }))

  it('should render books on the component', waitForAsync(async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.directive(BookComponent));

    expect(items[0].componentInstance.book).toBe(BOOKS_MOCK[0])
  }))

  it('should show dialog after click on item', async() => {
    // ARRANGE
    const loader: HarnessLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);

    // ACT
    component.previewItem(BOOKS_MOCK[0]);
    const dialog = await loader.getAllHarnesses(MatDialogHarness);
    fixture.detectChanges();
    console.log(await dialog[0].getText(), '123')
    
    // ASSERT
    expect(dialog.length).toBe(1);
  })




});
