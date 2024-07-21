import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmlSrchMediaPage } from './rml-srch-media.page';

describe('RmlSrchMediaPage', () => {
  let component: RmlSrchMediaPage;
  let fixture: ComponentFixture<RmlSrchMediaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RmlSrchMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
