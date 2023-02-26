import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyDto } from './dto/company.dto';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  findAll() {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return this.companyRepository.findOne({
      where: {
        id,
      },
    });
  }

  create(reqCompany: CompanyDto) {
    const company = new CompanyEntity();

    company.name = reqCompany.name;
    company.parentCompany = reqCompany.parentCompanyId;
    company.station = reqCompany.stationId;

    return this.companyRepository.save(company);
  }

  async update(id: number, reqCompany: CompanyDto) {
    const company = await this.companyRepository.findOne({
      where: {
        id,
      },
    });

    company.name = reqCompany.name;
    company.parentCompany = reqCompany.parentCompanyId;
    company.station = reqCompany.stationId;

    return this.companyRepository.save(company);
  }

  remove(id: number) {
    return this.companyRepository.delete(id);
  }
}
