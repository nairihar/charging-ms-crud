import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyEntity } from './company.entity';
import { CompanyDto } from './dto/company.dto';
import { CompaniesService } from './companies.service';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CompanyEntity> {
    return this.companiesService.findOne(id);
  }

  @Post()
  async create(@Body() CompanyDto: CompanyDto): Promise<CompanyEntity> {
    return this.companiesService.create(CompanyDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() CompanyDto: CompanyDto,
  ): Promise<CompanyEntity> {
    return this.companiesService.update(id, CompanyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.companiesService.remove(id);
    return { ok: true };
  }
}
