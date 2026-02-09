import { Controller, Post, Body, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() body: CreateCountryDto) {
    return this.countryService.create(body);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }
}
