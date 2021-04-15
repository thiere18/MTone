import {Entity, Column, OneToMany, } from 'typeorm'
import Model from './Model';
import { Transaction } from './Transaction';

enum flux{
    Entrant = "Entrant",
    Sortant="Sortant"
}
@Entity('type_transaction')

export class TypeTransaction extends Model {
    @Column()
    name: string
    @Column()
    flux: flux 
    @OneToMany(() => Transaction, transaction => transaction.type)
    transaction: Transaction[];
}