import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { StationEntity } from '../stations/station.entity';

@Entity('companies')
@Unique(['name'])
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @ManyToOne(() => CompanyEntity)
  @JoinColumn()
  parentCompany: number;

  @ManyToOne(() => StationEntity)
  @JoinColumn()
  station: number;
}
