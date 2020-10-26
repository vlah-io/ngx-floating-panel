import {Component, EventEmitter} from '@angular/core';
import {NgxFloatingPanelInterface} from '../../../ngx-floating-panel/src/lib/interface/ngx-floating-panel.interface';
import {
  FormWorker,
  NgbDateLocalAdapter,
  NgbDateParserLocalFormatter,
  VLAHIO_FORM_CONFIG,
  VLAHIO_FORM_CRUD_SERVICE,
  VLAHIO_FORM_MODEL
} from '@vlah.io/ngx-form';
import {NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

  providers: [
    FormWorker,
    {
      provide: VLAHIO_FORM_CONFIG,
      useValue: {
        locale: 'en-US'
      }
    },
    {
      provide: VLAHIO_FORM_MODEL,
      useValue: {
        currency: 12345.01,
        gbp: 1256365,
        usd: 85369,
        eur: 845635,
        date: '2019-04-22T00:00:00+00:00',
        email: 'some@email.com',
        numeric: 486,
        numeric2: 88,
        percentage: 24,
        text: 'Some super fine text',
        password: null,
        passwordConfirmation: null,
        select: {
          id: 23,
          name: 'Some option'
        },
        select2: null,
        select3: null,
        elasticTextarea: null
      }
    },
    {
      provide: VLAHIO_FORM_CRUD_SERVICE,
      useValue: {}
    },
    {provide: NgbDateAdapter, useClass: NgbDateLocalAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateParserLocalFormatter}
  ]
})
export class FormComponent implements NgxFloatingPanelInterface {
  dismiss: EventEmitter<true> = new EventEmitter<true>();

  constructor(public formWorker: FormWorker) {
  }

  dismiss$(e: MouseEvent): void {
    console.log('Dismissing from inside FormComponent!');
    this.dismiss.emit(true);
    e.stopPropagation();
  }
}
