import { Module } from '@nestjs/common';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationEntity } from './station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StationEntity])],
  controllers: [StationsController],
  providers: [StationsService],
})
export class StationsModule {}
