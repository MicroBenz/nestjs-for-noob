import { Controller, Get, Param, Post, Body, UsePipes } from '@nestjs/common';
import * as Joi from '@hapi/joi';

import { CreateCatDto } from 'src/dto/create-cat.dto';
import { CatsService } from 'src/services/cats.service';
import { Cat, createCatSchema } from 'src/schemas/cats.schema';
import { JoiValidationPipe } from 'src/pipe/joi-validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    const cats = await this.catsService.findAll();
    return cats;
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async createCat(@Body() data: CreateCatDto): Promise<Cat> {
    const cat = await this.catsService.create(data);
    return cat;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    const cat = await this.catsService.findById(id);
    return cat;
  }
}
