import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('station_types')
@Unique(['name'])
export class StationTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  maxPower: number;
}
