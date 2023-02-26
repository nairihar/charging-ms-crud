import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  Unique,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StationTypeEntity } from '../station-types/station-type.entity';

@Entity('stations')
@Unique(['name'])
export class StationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @OneToOne(() => StationTypeEntity)
  @JoinColumn()
  stationType: number;
}
