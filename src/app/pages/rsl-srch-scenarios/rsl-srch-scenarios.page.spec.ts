import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RslSrchScenariosPage } from './rsl-srch-scenarios.page';

describe('RslSrchScenariosPage', () => {
  let component: RslSrchScenariosPage;
  let fixture: ComponentFixture<RslSrchScenariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RslSrchScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
