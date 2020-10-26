@vlah.io/ngx-floating-panel

Set of reusable Angular components (factory workers) to help display panels.

### Usage

```
export class AppComponent<C> {
  constructor(private floatingPanelWorker: FloatingPanelWorker) {
  }

  ngOnInit() {
    const formCompRef = this.floatingPanelWorker.provide(FormComponent);
    const compRef = this.floatingPanelWorker.attach(formCompRef, 'vlahio-right');
  }

  ngOnDestroy() {
    this.floatingPanelWorker.onDestroy();
  }
}
```

### Available positions & formats

```
  .vlahio-left
  .vlahio-left-fixed
  .vlahio-left-small
  .vlahio-bottom
  .vlahio-center
  .vlahio-center-small
  .vlahio-full
  .vlahio-right
  .vlahio-right-fixed
  .vlahio-right-small
```

### Using factories

```
{
  provide: FloatingPAnelWorker,
  useFactory: FloatingPanelWorkerFactory,
  deps: [
    FactoryWorker
  ]
}
```

For more details read [here](https://github.com/vlah-io/ngx-worker/blob/master/INSTALLATION.md).
