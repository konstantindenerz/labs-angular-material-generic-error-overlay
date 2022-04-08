import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ErrorPipe} from '../error-handling/error.pipe';
import {ErrorOverlayComponent} from './error-overlay.component';

@NgModule({
  declarations: [
    ErrorOverlayComponent,
    ErrorPipe,
  ],
  exports: [ErrorOverlayComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorOverlayModule {
}
