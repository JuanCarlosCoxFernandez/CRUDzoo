import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateZooPage } from './create-zoo.page';

describe('CreateZooPage', () => {
  let component: CreateZooPage;
  let fixture: ComponentFixture<CreateZooPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateZooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
