import { prop } from '@typegoose/typegoose';

export class Country {
  @prop({ required: true, unique: true })
  code!: string;

  @prop({ required: true })
  name!: string;
}
