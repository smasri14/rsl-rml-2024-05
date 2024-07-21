import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmlSrchPage } from './rml-srch.page';

describe('RmlSrchPage', () => {
  let component: RmlSrchPage;
  let fixture: ComponentFixture<RmlSrchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RmlSrchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
