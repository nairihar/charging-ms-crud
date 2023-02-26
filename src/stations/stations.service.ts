import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { StationEntity } from './station.entity';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(StationEntity)
    private stationsRepository: Repository<StationEntity>,
  ) {}

  async create(createStationDto: CreateStationDto): Promise<StationEntity> {
    const station = new StationEntity();
    station.name = createStationDto.name;
    station.stationType = createStationDto.stationType;
    return this.stationsRepository.save(station);
  }

  async findAll(): Promise<StationEntity[]> {
    return this.stationsRepository.find();
  }

  async findOne(id: number): Promise<StationEntity> {
    return this.stationsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateStationDto: UpdateStationDto,
  ): Promise<StationEntity> {
    const station = await this.stationsRepository.findOne({
      where: {
        id,
      },
    });
    station.name = updateStationDto.name ?? station.name;
    station.stationType = updateStationDto.stationType ?? station.stationType;
    return this.stationsRepository.save(station);
  }

  async remove(id: number): Promise<void> {
    await this.stationsRepository.delete(id);
  }
}
