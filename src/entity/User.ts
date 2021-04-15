import {Entity, Column, } from 'typeorm'
import Model from './Model';

@Entity("users")
export class User extends Model{

  @Column()
  username: string;

  @Column()
  email: string;
  @Column()
  password: string;

  
}