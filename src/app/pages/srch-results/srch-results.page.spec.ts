import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrchResultsPage } from './srch-results.page';

describe('SrchResultsPage', () => {
  let component: SrchResultsPage;
  let fixture: ComponentFixture<SrchResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SrchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
