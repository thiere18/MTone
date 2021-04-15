import {Entity, Column, OneToMany, } from 'typeorm'
import Model from './Model';
import { Transaction } from './Transaction';
@Entity('compteBancaire')
export class CompteBancaire extends Model {
    @Column()
    name: string
    @OneToMany(() => Transaction, transaction => transaction.compteBancaire)
    transactions: Transaction[];

}