import { TestBed } from '@angular/core/testing';

import { NgxFloatingPanelService } from './ngx-floating-panel.service';

describe('NgxFloatingPanelService', () => {
  let service: NgxFloatingPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFloatingPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
