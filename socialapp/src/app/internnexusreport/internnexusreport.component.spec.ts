import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternnexusreportComponent } from './internnexusreport.component';

describe('InternnexusreportComponent', () => {
  let component: InternnexusreportComponent;
  let fixture: ComponentFixture<InternnexusreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternnexusreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternnexusreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
