import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as Joi from '@hapi/joi';

@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

export const createCatSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});
