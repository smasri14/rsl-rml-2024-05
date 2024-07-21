import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoGenPage } from './info-gen.page';

describe('InfoGenPage', () => {
  let component: InfoGenPage;
  let fixture: ComponentFixture<InfoGenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
