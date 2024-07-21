import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RslSrchResultsPage } from './rsl-srch-results.page';

describe('RslSrchResultsPage', () => {
  let component: RslSrchResultsPage;
  let fixture: ComponentFixture<RslSrchResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RslSrchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
