import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CatsModule } from './cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-cat'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
