import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStationTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  maxPower: number;
}
