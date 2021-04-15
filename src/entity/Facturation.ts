import { Column, Entity } from "typeorm";
import Model from "./Model";

@Entity()
export class Facturation extends Model {
    [x: string]: any;
    @Column()
    is_payed: boolean
}