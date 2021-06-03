import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'category' })
export class Category {

    // @Column()
    @PrimaryColumn({ name: 'category_id', type: 'integer'})
    id: number

    @Column( {name: 'name', length: 50 })
    name: string

    @Column({ name: 'picture_link', length: 100 })
    pictureLink: string
}