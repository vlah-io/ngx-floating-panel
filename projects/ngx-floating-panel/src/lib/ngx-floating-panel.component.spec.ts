import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFloatingPanelComponent } from './ngx-floating-panel.component';

describe('NgxFloatingPanelComponent', () => {
  let component: NgxFloatingPanelComponent;
  let fixture: ComponentFixture<NgxFloatingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFloatingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFloatingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
