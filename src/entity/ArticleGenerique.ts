import {Entity, Column,   } from 'typeorm'
import Model from './Model';
@Entity('ArticleGenerique')
export class ArticleGenerique extends Model {
    @Column()
    reference: string
    @Column()
    designation: string

}