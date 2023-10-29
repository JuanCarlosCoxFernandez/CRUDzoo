import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateZooPage } from './update-zoo.page';

describe('UpdateZooPage', () => {
  let component: UpdateZooPage;
  let fixture: ComponentFixture<UpdateZooPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateZooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
