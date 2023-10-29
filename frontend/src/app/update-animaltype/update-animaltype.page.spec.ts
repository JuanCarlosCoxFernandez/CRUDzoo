import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAnimaltypePage } from './update-animaltype.page';

describe('UpdateAnimaltypePage', () => {
  let component: UpdateAnimaltypePage;
  let fixture: ComponentFixture<UpdateAnimaltypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateAnimaltypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
