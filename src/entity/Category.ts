import {Entity, Column, ManyToOne, OneToMany, } from 'typeorm'
import Model from './Model';
import {ArticleGenerique} from './ArticleGenerique'
import { Article } from './Article';
@Entity('category')
export class Category extends Model {
    @Column()
    name: string
  
    @OneToMany(() => Article, article => article.category)
    article: Article[];

}