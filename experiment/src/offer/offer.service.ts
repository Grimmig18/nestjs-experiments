import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './entity/offer.entity';


@Injectable()
export class OfferService {

    constructor(
        @InjectRepository(Offer)
        private offerRepository: Repository<Offer>
    ) {}

    async getOfferById(id: string): Promise<Offer[] | Offer> {
        console.log(id)
        return await this.offerRepository.findOne(id)
    }
    
}
