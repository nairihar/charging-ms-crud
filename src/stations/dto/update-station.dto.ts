import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStationDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly name?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  readonly stationType?: number;
}
