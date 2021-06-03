// import cryptoRandomString from "crypto-random-string";
const cryptoRandomString = require('crypto-random-string')
import { Offer } from "src/offer/entity/offer.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ContractUser } from "./contract-user.entity";

@Entity('user')
export class User extends ContractUser {

    // @Column({ name: 'user_id' })
    // @PrimaryColumn({ name: 'user_id', generated: true, default: (): string => cryptoRandomString({ type: 'alphanumeric', length: 32 }) })
    // id: string

    // @Column({ name: 'first_name' })
    // firstName: string
    
    // @Column({ name: 'last_name' })
    // lastName: string
    
    @Column({ name: 'email' })
    email: string

    @Column({ name: 'phone_number' })
    phoneNumber: string

    // @Column({ name: 'password_hash' })
    // passwordHash: string

    @Column({ name: 'verified' })
    verified: boolean

    // @Column({ name: 'place_id', type: 'integer' })
    // placeId: number
    // // postCode?: string
    // // city?: string

    // @Column({ name: 'street' })
    // street: string

    // @Column({ name: 'last_name' })
    // houseNumber: string

    // @Column({ name: 'lessee_rating' })
    // lesseeRating: number

    // @Column({ name: 'number_of_lessee_ratings' })
    // numberOfLesseeRatings: number

    // @Column({ name: 'lessor_rating' })
    // lessorRating: number

    // @Column({ name: 'number_of_lessor_ratings' })
    // numberOfLessorRatings: number

    @Column({ name: 'date_of_birth' })
    dateOfBirth: Date

    // @Column({ name: 'profile_picture' })
    // profilePicture: string

    // @Column({ name: 'status_id' })
    // statusId: number
}