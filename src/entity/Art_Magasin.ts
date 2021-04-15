import { Column, Entity, ManyToOne } from "typeorm";
import { Article } from "./Article";
import { ArticleGenerique } from "./ArticleGenerique";
import { Depot } from "./Depot";
import { Magasin } from "./Magasin";

import Model from "./Model";
@Entity()
export class Art_Magasin extends Model {

    @Column()
    quantity: number

    @ManyToOne(() => Magasin, magasin => magasin.art_magasins)
    public magasin!: Magasin;

    @ManyToOne(() => Article, article => article.art_magasins)
    public article!: Article;

}