import {Entity, Column, ManyToOne, } from 'typeorm'
import { Magasin } from './Magasin';
import Model from './Model';
@Entity('caisse')
export class Caisse extends Model {
    @Column()
    name: string
  
    @ManyToOne(() => Magasin, magasin => magasin.caisse)
    magasin: Magasin;
}