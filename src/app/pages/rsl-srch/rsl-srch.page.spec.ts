import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RslSrchPage } from './rsl-srch.page';

describe('RslSrchPage', () => {
  let component: RslSrchPage;
  let fixture: ComponentFixture<RslSrchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RslSrchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
