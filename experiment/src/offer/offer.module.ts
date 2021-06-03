import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './entity/offer.entity';
import { Category } from './entity/category.entity';
import { Repository } from 'typeorm';
// import { UserModule } from 'src/user/user.module';

@Module({
  imports: [ TypeOrmModule.forFeature([Offer, Category])],
  // exports: [TypeOrmModule],
  providers: [OfferService],
  controllers: [OfferController]
})
export class OfferModule {}
