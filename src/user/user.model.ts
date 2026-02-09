import { prop } from '@typegoose/typegoose';
import type { Ref } from '@typegoose/typegoose';
import { Country } from '../country/country.model';

export class User {
  @prop({ required: true, unique: true })
  email!: string;

  @prop({ required: true })
  password!: string;

  @prop({ ref: () => Country, required: true })
  country!: Ref<Country>;
}
