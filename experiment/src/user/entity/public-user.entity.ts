import cryptoRandomString from "crypto-random-string";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class PublicUser {
    @PrimaryColumn({ name: 'user_id', generated: true, default: (): string => cryptoRandomString({ type: 'alphanumeric', length: 32 }) })
    id: string

    @Column({ name: 'first_name' })
    firstName: string
    
    @Column({ name: 'last_name' })
    lastName: string

    @Column({ name: 'lessee_rating' })
    lesseeRating: number

    @Column({ name: 'number_of_lessee_ratings' })
    numberOfLesseeRatings: number

    @Column({ name: 'lessor_rating' })
    lessorRating: number

    @Column({ name: 'number_of_lessor_ratings' })
    numberOfLessorRatings: number

    @Column({ name: 'profile_picture' })
    profilePicture: string
}