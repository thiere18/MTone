import { Column, Entity, ManyToOne } from "typeorm";
import Model from "./Model";
import { Article } from './Article';
import { Facturation } from './Facturation';

@Entity()
export class Art_Facturation extends Model{
    @Column()
    quantity: number
    @ManyToOne(() => Facturation, facturation => facturation.art_facturations)
    public facturation!: Facturation;


    @ManyToOne(() => Article, article => article.art_facturations)
    public article!: Article;

}