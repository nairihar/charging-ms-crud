import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StationTypeEntity } from './station-type.entity';
import { CreateStationTypeDto } from './dto/create-station-type.dto';
import { UpdateStationTypeDto } from './dto/update-station-type.dto';

@Injectable()
export class StationTypesService {
  constructor(
    @InjectRepository(StationTypeEntity)
    private readonly stationTypeRepository: Repository<StationTypeEntity>,
  ) {}

  findAll() {
    return this.stationTypeRepository.find();
  }

  findOne(id: number) {
    return this.stationTypeRepository.findOne({
      where: {
        id,
      },
    });
  }

  create(stationTypeDto: CreateStationTypeDto) {
    const stationType = new StationTypeEntity();
    stationType.name = stationTypeDto.name;
    stationType.maxPower = stationTypeDto.maxPower;

    return this.stationTypeRepository.save(stationType);
  }

  async update(id: number, stationTypeDto: UpdateStationTypeDto) {
    const stationType = await this.stationTypeRepository.findOne({
      where: {
        id,
      },
    });
    stationType.name = stationTypeDto.name;
    stationType.maxPower = stationTypeDto.maxPower;

    return this.stationTypeRepository.save(stationType);
  }

  delete(id: number) {
    return this.stationTypeRepository.delete(id);
  }
}
