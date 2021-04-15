import {Entity, Column, OneToMany, } from 'typeorm'
import { Dette } from './Dette';
import Model from './Model';
    enum type_client {
    gerant = "gerant",
    acheteur="acheteur",
    }
    @Entity('client')
export class Client extends Model {
    @Column()
    name: string
    @Column()
    type_client: type_client
    @Column()
    phone: string
        
    @OneToMany(() => Dette, dette => dette.client)
    dette: Dette[];
}