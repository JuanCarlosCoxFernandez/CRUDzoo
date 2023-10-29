import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZooPage } from './zoo.page';

describe('ZooPage', () => {
  let component: ZooPage;
  let fixture: ComponentFixture<ZooPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
