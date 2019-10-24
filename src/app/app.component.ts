import { Component } from '@angular/core';
import { TrainTimesService } from './services/train-times.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dart-now';

  constructor(private service: TrainTimesService) {
    this.service.getStationData('mhide').subscribe((st) => console.log(st));
    this.service.getAllDartStations().subscribe((st) => console.log(st));
  }
}
