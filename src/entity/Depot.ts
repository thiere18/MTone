import {Entity, Column, OneToMany, } from 'typeorm'
import Model from './Model';
import { Art_depot } from './Art_depot';
@Entity('depot')
export class Depot extends Model {
    @Column()
    name: string
 
    @OneToMany(() => Art_depot, art_depot => art_depot.depot)
public art_depots!: Art_depot[];

}
