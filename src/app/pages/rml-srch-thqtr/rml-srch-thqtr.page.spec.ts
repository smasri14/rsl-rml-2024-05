import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmlSrchThqtrPage } from './rml-srch-thqtr.page';

describe('RmlSrchThqtrPage', () => {
  let component: RmlSrchThqtrPage;
  let fixture: ComponentFixture<RmlSrchThqtrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RmlSrchThqtrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
