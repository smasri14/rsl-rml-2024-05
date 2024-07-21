import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentSrchResultsPage } from './recent-srch-results.page';

describe('RecentSrchResultsPage', () => {
  let component: RecentSrchResultsPage;
  let fixture: ComponentFixture<RecentSrchResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSrchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
