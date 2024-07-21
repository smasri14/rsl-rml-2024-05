import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmlSrchScenariosPage } from './rml-srch-scenarios.page';

describe('RmlSrchScenariosPage', () => {
  let component: RmlSrchScenariosPage;
  let fixture: ComponentFixture<RmlSrchScenariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RmlSrchScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
