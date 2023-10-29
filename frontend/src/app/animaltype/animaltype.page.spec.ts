import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimaltypePage } from './animaltype.page';

describe('AnimaltypePage', () => {
  let component: AnimaltypePage;
  let fixture: ComponentFixture<AnimaltypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimaltypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
