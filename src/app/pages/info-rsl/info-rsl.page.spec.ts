import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoRslPage } from './info-rsl.page';

describe('InfoRslPage', () => {
  let component: InfoRslPage;
  let fixture: ComponentFixture<InfoRslPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRslPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
