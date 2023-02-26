import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { StationExistsConstraint } from '../../_common/validators/station-exists.validator';

export class CompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Validate(StationExistsConstraint)
  stationId: number;

  @IsOptional()
  parentCompanyId?: number;
}
