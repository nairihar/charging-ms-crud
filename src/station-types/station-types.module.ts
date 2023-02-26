import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationTypesController } from './station-types.controller';
import { StationTypesService } from './station-types.service';
import { StationTypeEntity } from './station-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StationTypeEntity])],
  controllers: [StationTypesController],
  providers: [StationTypesService],
  exports: [StationTypesService],
})
export class StationTypesModule {}
