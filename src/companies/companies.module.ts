import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CompanyEntity } from './company.entity';
import { StationEntity } from '../stations/station.entity';
import { StationTypeEntity } from '../station-types/station-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity, StationEntity, StationTypeEntity]),
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
