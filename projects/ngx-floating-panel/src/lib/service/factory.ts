import {FactoryWorker} from '@vlah.io/ngx-worker';
import {FloatingPanelWorker} from '../worker/floating-panel.worker';

export function FloatingPanelWorkerFactory(factoryWorker: FactoryWorker
): FloatingPanelWorker {
  return new FloatingPanelWorker(factoryWorker);
}
