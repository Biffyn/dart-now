import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationData } from '../interfaces/station-data.interface';
import { pluck, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrainTimesService {
  constructor(private httpClient: HttpClient) {}

  public getStationData(): Observable<StationData[]> {
    return this.httpClient
      .get<Array<StationData>>('api/getStationDataByCodeXML_WithNumMins?StationCode=mhide&NumMins=60')
      .pipe(map((data: any) => data.ArrayOfObjStationData.objStationData));
  }
}
