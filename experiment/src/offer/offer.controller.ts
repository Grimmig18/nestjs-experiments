import { Controller, Get, Param } from '@nestjs/common';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {

    constructor(private readonly offerService: OfferService) {}

    @Get(':id')
    getOfferById(
        @Param('id') id: string
    ) {
        return this.offerService.getOfferById(id)
    }
}
