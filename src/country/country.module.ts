import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { buildSchema } from '@typegoose/typegoose';
import { Country } from './country.model';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Country.name, schema: buildSchema(Country) },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
