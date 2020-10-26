import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxFloatingPanelModule} from '../../../ngx-floating-panel/src/lib/ngx-floating-panel.module';
import {FormComponent} from './form.component';
import {FloatingPanelComponent} from '../../../ngx-floating-panel/src/lib/component/floating-panel.component';
import {NgxFormModule} from '@vlah.io/ngx-form';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFloatingPanelModule,
    NgxFormModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormComponent,
    FloatingPanelComponent
  ]
})
export class AppModule {
}
