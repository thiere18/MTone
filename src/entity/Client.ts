import {Entity, Column, OneToMany,ManyToOne } from 'typeorm'
import { Dette } from './Dette';
import {Invoices} from './Invoices';
import Model from './Model';
  
    @Entity('client')
export class Client extends Model {
    @Column()
    name: string
    
        
    @OneToMany(() => Dette, dette => dette.client)
    dette: Dette[];
    @OneToMany(() => Invoices, invoice => invoice.client)
    invoices: Invoices[];

}