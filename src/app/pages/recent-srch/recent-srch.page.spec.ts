import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentSrchPage } from './recent-srch.page';

describe('RecentSrchPage', () => {
  let component: RecentSrchPage;
  let fixture: ComponentFixture<RecentSrchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSrchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
