import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OfferService } from './offer/offer.service';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    OfferModule,

    TypeOrmModule.forRoot({
        // Add TypeORM config to run nest
    })
  ],
  exports: [TypeOrmModule]
})
export class AppModule {}
