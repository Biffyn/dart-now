import { TestBed } from '@angular/core/testing';

import { TrainTimesService } from './train-times.service';

describe('TrainTimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainTimesService = TestBed.get(TrainTimesService);
    expect(service).toBeTruthy();
  });
});
