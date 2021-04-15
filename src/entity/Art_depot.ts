import { Column, Entity, ManyToOne } from "typeorm";
import { Article } from "./Article";
import { Depot } from "./Depot";
import Model from "./Model";

@Entity()
export class Art_depot extends Model {
    @Column()
    quantity: number

    @ManyToOne(() => Article, article => article.art_depots)
    public article!: Article;

    @ManyToOne(() => Depot, depot => depot.art_depots)
    public depot!: Depot;
}