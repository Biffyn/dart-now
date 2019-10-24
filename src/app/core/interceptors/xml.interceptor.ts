import { map, filter } from 'rxjs/operators';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import * as fastXmlParser from 'fast-xml-parser';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';

export interface XMLParser {
  parse: any;
  validate: any;
}

export const XmlParser = new InjectionToken('xml2js', {
  providedIn: 'root',
  factory: () => ({ parse: fastXmlParser.parse, validate: fastXmlParser.validate })
});

@Injectable()
export class XmlInterceptor implements HttpInterceptor {
  constructor(@Inject(XmlParser) private xml: XMLParser) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({ responseType: 'text' });
    return next.handle(req).pipe(
      filter((event) => event instanceof HttpResponse),
      map(
        (event: HttpResponse<any>) => {
          if (this.xml.validate(event.body) !== true) {
            return event;
          }
          let body = JSON.parse(JSON.stringify(this.xml.parse(event.body)));
          body = body.ArrayOfObjStationData
            ? body.ArrayOfObjStationData.objStationData
            : body.ArrayOfObjStation.objStation;
          return event.clone({ body });
        },
        (error) => event
      )
    );
  }
}
