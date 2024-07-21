import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmlSrchResultsPage } from './rml-srch-results.page';

describe('RmlSrchResultsPage', () => {
  let component: RmlSrchResultsPage;
  let fixture: ComponentFixture<RmlSrchResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RmlSrchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
