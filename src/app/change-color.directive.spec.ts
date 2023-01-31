import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';


@Component({
  selector: 'pcard-uts-workshop-test-cmp',
  template: `<div pcardUtsWorkshopChangeColor>Hello world!</div>`
})
class TestComponent {}


describe('ChangeColorDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ChangeColorDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  })

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should change the div color', () => {
    const divWithDirective: HTMLDivElement = fixture.debugElement.query(By.directive(ChangeColorDirective)).nativeElement;

    expect(divWithDirective.style.color).toBe('red');
    
  });
});
