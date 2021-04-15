import {Entity, Column, ManyToOne, } from 'typeorm'
import { Client } from './Client';
import { Fournisseur } from './Fournisseur';
import Model from './Model';
@Entity('dette')
export class Dette extends Model {
    @Column()
    montant: string
    @Column()
    status: boolean
    @Column()
    avance: number
    @Column()
    fin: Date
    @ManyToOne(() => Client, client => client.dette)
    client: Client;

    @ManyToOne(() => Fournisseur, fournisseur => fournisseur.dettes)
    fournisseur: Fournisseur;

}
