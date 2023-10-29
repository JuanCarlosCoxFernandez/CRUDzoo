import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAnimaltypePage } from './create-animaltype.page';

describe('CreateAnimaltypePage', () => {
  let component: CreateAnimaltypePage;
  let fixture: ComponentFixture<CreateAnimaltypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAnimaltypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
