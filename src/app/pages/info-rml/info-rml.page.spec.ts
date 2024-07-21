import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoRmlPage } from './info-rml.page';

describe('InfoRmlPage', () => {
  let component: InfoRmlPage;
  let fixture: ComponentFixture<InfoRmlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRmlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
