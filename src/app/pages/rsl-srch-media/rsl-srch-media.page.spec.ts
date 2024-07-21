import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RslSrchMediaPage } from './rsl-srch-media.page';

describe('RslSrchMediaPage', () => {
  let component: RslSrchMediaPage;
  let fixture: ComponentFixture<RslSrchMediaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RslSrchMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
