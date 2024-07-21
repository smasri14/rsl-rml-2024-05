import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RslSrchThqtrPage } from './rsl-srch-thqtr.page';

describe('RslSrchThqtrPage', () => {
  let component: RslSrchThqtrPage;
  let fixture: ComponentFixture<RslSrchThqtrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RslSrchThqtrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
