import {Component, OnDestroy} from '@angular/core';
import {FormComponent} from './form.component';
import {FloatingPanelWorker} from '../../../ngx-floating-panel/src/lib/worker/floating-panel.worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent<C> implements OnDestroy {
  title = 'ngx-floating-panel-test';

  constructor(private floatingPanelWorker: FloatingPanelWorker) {
  }

  show(position: string): void {
    const formCompRef = this.floatingPanelWorker.provide(FormComponent);
    this.floatingPanelWorker.attach(formCompRef, position);
  }

  ngOnDestroy(): void {
    this.floatingPanelWorker.onDestroy();
  }
}
