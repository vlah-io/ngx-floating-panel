import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {SubSink} from 'subsink';

@Component({
  selector: 'vlahio-floating-panel',
  templateUrl: './floating-panel.component.html'
})
export class FloatingPanelComponent implements OnDestroy {
  subSink = new SubSink();

  @Output() dismiss$: EventEmitter<true> = new EventEmitter<true>();
  @ViewChild('container', {static: true}) container!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  @Input('position')
  set _position(position: string) {
    this.renderer.addClass(this.container.nativeElement, position);
  }

  @Input('zIndex')
  set _zIndex(zIndex: number) {
    this.renderer.setStyle(this.container.nativeElement, 'zIndex', zIndex);
  }

  @HostListener('document:keyup', ['$event'])
  _handleKeyUpEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.dismiss();
    }
  }

  // this.renderer.removeClass(document.body, 'g-n-sc');
  // this.renderer.addClass(document.body, 'g-n-sc');
  dismiss(): void {
    this.dismiss$.emit(true);
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
