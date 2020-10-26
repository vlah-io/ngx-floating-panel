import {ComponentRef, EventEmitter, Injectable, Type} from '@angular/core';
import {FactoryWorker} from '@vlah.io/ngx-worker';
import {FloatingPanelComponent} from '../component/floating-panel.component';
import {AttachOptionsInterface, NgxFloatingPanelInterface} from '../interface/ngx-floating-panel.interface';

@Injectable({
  providedIn: 'root'
})
export class FloatingPanelWorker {
  compRefArray: ComponentRef<FloatingPanelComponent>[];

  constructor(private factoryWorker: FactoryWorker) {
    this.compRefArray = [];
  }

  provide<C>(c: Type<C>, content?: any[][]): ComponentRef<C> {
    return this.factoryWorker.make(c, content);
  }

  attach<C>(providedCompRef: ComponentRef<C>,
            position: string,
            options: AttachOptionsInterface = {}
  ): ComponentRef<FloatingPanelComponent> {
    const {container, prepend, zIndex} = options;
    const compRef = this.factoryWorker.make(
      FloatingPanelComponent,
      [[providedCompRef.location.nativeElement]]
    );
    this.compRefArray.push(compRef);
    const compRefInstance = compRef.instance;

    compRefInstance._position = position;
    if (zIndex) {
      compRefInstance._zIndex = zIndex;
    }

    const dismiss = (providedCompRef.instance as unknown as NgxFloatingPanelInterface).dismiss;
    if (dismiss && dismiss instanceof EventEmitter) {
      compRefInstance.subSink.add(
        (dismiss as EventEmitter<true>).subscribe(
          () => {
            this.factoryWorker.destroy(compRef);
          }
        )
      );
    }

    compRefInstance.subSink.add(
      compRefInstance.dismiss.subscribe(
        () => {
          this.factoryWorker.destroy(compRef);
        }
      )
    );

    compRef.onDestroy(
      () => {
        this.factoryWorker.destroy(providedCompRef);
      }
    );

    if (prepend) {
      this.factoryWorker.glue(compRef, {prepend: true, container});
    } else {
      this.factoryWorker.glue(compRef, {append: true, container});
    }

    return compRef;
  }

  // Use this when you want a full clean-up from inside the component at destroy
  onDestroy(): void {
    this.compRefArray.forEach(
      (compRef: ComponentRef<FloatingPanelComponent>) => {
        this.factoryWorker.destroy(compRef);
      }
    );
  }
}
