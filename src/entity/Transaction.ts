import {Entity, Column, ManyToOne, } from 'typeorm'
import { CompteBancaire } from './CompteBancaire';
import Model from './Model';
import { TypeTransaction } from './TypeTransaction';

@Entity('transaction')
export class Transaction extends Model {
    @Column()
    montant: number

    @ManyToOne(() => TypeTransaction, type => type.transaction)
    type: TypeTransaction
    @ManyToOne(() => CompteBancaire, compteBancaire => compteBancaire.transactions)
    compteBancaire: CompteBancaire;

}