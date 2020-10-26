import {EventEmitter} from '@angular/core';

export interface NgxFloatingPanelInterface {
  dismiss: EventEmitter<true>;
}

export interface AttachOptionsInterface {
  container?: HTMLElement;
  prepend?: boolean;
  zIndex?: number;
}
