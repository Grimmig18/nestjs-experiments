import { Column, Entity } from "typeorm";
import { PublicUser } from "./public-user.entity";

@Entity('user')
export class ContractUser extends PublicUser {
    @Column({ name: 'place_id', type: 'integer' })
    placeId: number
    // postCode?: string
    // city?: string

    @Column({ name: 'street' })
    street: string

    @Column({ name: 'last_name' })
    houseNumber: string
}