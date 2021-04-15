import { Column, Entity, OneToMany } from "typeorm";
import { Art_Facturation } from "./Art_Facturation";
import Model from "./Model";

@Entity()
export class Facturation extends Model {
    @Column()
    is_payed: boolean


    @OneToMany(() => Art_Facturation, art_facturation => art_facturation.facturation)
    public art_facturations!: Art_Facturation[];
    
}