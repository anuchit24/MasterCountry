import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { ReturnModelType } from '@typegoose/typegoose';
import { MongoServerError } from 'mongodb';
import { Country } from './country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: ReturnModelType<typeof Country>,
  ) {}

  async create(data: Partial<Country>) {
    try {
      return await this.countryModel.create(data);
    } catch (error) {
      if (error instanceof MongoServerError && error.code === 11000) {
        throw new ConflictException('Country code already exists');
      }
      throw error;
    }
  }

  findAll() {
    return this.countryModel.find();
  }
}
