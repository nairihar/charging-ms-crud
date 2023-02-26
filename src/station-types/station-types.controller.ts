import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StationTypesService } from './station-types.service';
import { CreateStationTypeDto } from './dto/create-station-type.dto';
import { UpdateStationTypeDto } from './dto/update-station-type.dto';
import { StationTypeEntity } from './station-type.entity';

@ApiTags('Station types')
@Controller('station-types')
export class StationTypesController {
  constructor(private readonly stationTypesService: StationTypesService) {}

  @Get()
  async findAll(): Promise<StationTypeEntity[]> {
    return await this.stationTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StationTypeEntity> {
    return await this.stationTypesService.findOne(parseInt(id));
  }

  @Post()
  async create(
    @Body() createStationTypeDto: CreateStationTypeDto,
  ): Promise<StationTypeEntity> {
    return await this.stationTypesService.create(createStationTypeDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStationTypeDto: UpdateStationTypeDto,
  ): Promise<StationTypeEntity> {
    return await this.stationTypesService.update(
      parseInt(id),
      updateStationTypeDto,
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.stationTypesService.delete(Number(id));
    return;
  }
}
