import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
// import cryptoRandomString from 'crypto-random-string'
const cryptoRandomString = require('crypto-random-string')
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entity/user.entity";
import { userInfo } from "os";
import { PublicUser } from "src/user/entity/public-user.entity";

@Entity('offer')
export class Offer {
    
    // @Column({ name: 'offer_id' })
    @PrimaryColumn({ name: 'offer_id', generated: true, default: (): string => cryptoRandomString({ type: 'alphanumeric', length: 32 }) })
    id: string

    @ManyToOne(type => PublicUser, { eager: true })
    @JoinColumn({name: 'user_id', referencedColumnName: 'id' })
    user: PublicUser

    // @Column({name: 'user_id'})
    // userId: string

    @Column({ name: 'title'})
    title: string

    @Column({ name: 'description', length: 500 })
    description: string

    @Column({ name: 'rating', type: 'decimal' })
    rating: number
    
    @Column({ name: 'price', type: 'decimal' })
    price: number

    @Column({ name: 'category_id', type: 'integer'})
    categoryId: number

    @Column({ name: 'number_of_ratings', type: 'integer' })
    numberOfRating: number

    // @Column({ name: 'created_at', type: 'datetime' })
    @CreateDateColumn({ name: 'created_at', type: 'datetime' })
    createdAt: Date
    
    @Column({ name: 'status_id', type: 'integer' })
    statusId: number
    
    @Column({ name: 'deletion_date', type: 'datetime' })
    deletionDate: Date


    // @OneToMany(type => Photo, photo => photo.user)
    // photos: Photo[];
}