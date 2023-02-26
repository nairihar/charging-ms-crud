import { PartialType } from '@nestjs/mapped-types';
import { CreateStationTypeDto } from './create-station-type.dto';

export class UpdateStationTypeDto extends PartialType(CreateStationTypeDto) {}
