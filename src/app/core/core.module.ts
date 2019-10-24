import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { XmlInterceptor } from './interceptors/xml.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: XmlInterceptor, multi: true }]
})
export class CoreModule {}
