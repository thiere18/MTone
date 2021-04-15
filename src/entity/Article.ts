import {Entity, Column, ManyToOne, OneToMany, } from 'typeorm'
import { ArticleGenerique } from './ArticleGenerique';
import { Art_depot } from './Art_depot';
import { Art_Facturation } from './Art_Facturation';
import { Art_Magasin } from './Art_Magasin';
import { Category } from './Category';
import { Conteneur } from './Conteneur';
@Entity('article')
export class Article extends ArticleGenerique{
    @Column()
    prix_achat: number
    @Column()
    frais: number
    @Column()
    prix_revient: number
    @Column()
    prix_magasin: number
    @Column()
    prix_gros: number
    @Column()
    prix_client: number
    @Column()
    quantity_per_carton: number
    @Column()
    quantity_left: number
    @Column()
    quantity_init: number

    @ManyToOne(() => Conteneur, conteneur => conteneur.articles)
    conteneur: Conteneur;

    @ManyToOne(() => Category, category => category.article)
    category: Category;
    @OneToMany(() => Art_depot, art_depot => art_depot.article)
public art_depots!: Art_depot[];

@OneToMany(() => Art_Magasin, art_magasin => art_magasin.article)
public art_magasins!: Art_Magasin[];

@OneToMany(() => Art_Facturation, art_facturation => art_facturation.article)
public art_facturations!: Art_Facturation[];


}