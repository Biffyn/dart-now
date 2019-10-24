import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationData } from '../interfaces/station-data.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrainTimesService {
  constructor(private httpClient: HttpClient) {}

  public getStationData(stationCode: string): Observable<StationData[]> {
    return this.httpClient.get<Array<StationData>>(
      `api/getStationDataByCodeXML_WithNumMins?StationCode=${stationCode}&NumMins=90`
    );
  }

  public getAllDartStations() {
    return this.httpClient.get(`api/getAllStationsXML_WithStationType?StationType=D`);
  }
}
