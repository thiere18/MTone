import {Entity, Column, OneToMany, } from 'typeorm'
import { Article } from './Article';
import Model from './Model';
@Entity('conteneur')
export class Conteneur extends Model {

    @Column()
    prix_achat: number
    @Column()
    prix_transport: number
    @Column()
    frais_dedouanement: number
    @Column()
    local_charge: number
    @Column()
    dechargement: number
    @Column()
    frais_voyager: number
//     @OneToMany(() => Art_conteneur, art_conteneur => art_conteneur.conteneur)
// public art_conteneurs!:Art_conteneur[];
@OneToMany(() => Article, article => article.conteneur)
articles: Article[];
}