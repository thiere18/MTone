import { Column, Entity, OneToMany } from "typeorm";
import { Dette } from "./Dette";
import Model from "./Model";
enum type_fournisseur{
    locale = "locale",
    etranger = "etranger",
}

@Entity('Fournisseur')
export class Fournisseur extends Model{
    @Column()
    name: string
    @Column()
    type_fournisseur: type_fournisseur

    @OneToMany(() => Dette, dette => dette.fournisseur)
    dettes: Dette[];
}