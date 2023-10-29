import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAnimalPage } from './create-animal.page';

describe('CreateAnimalPage', () => {
  let component: CreateAnimalPage;
  let fixture: ComponentFixture<CreateAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
