import { ValidatorConstraintInterface } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { StationsService } from '../../stations/stations.service';

@Injectable()
export class StationExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly stationsService: StationsService) {}

  async validate(stationId: number): Promise<boolean> {
    console.log(1);
    if (!stationId) {
      return false;
    }

    const station = await this.stationsService.findOne(stationId);
    return !!station;
  }
}
