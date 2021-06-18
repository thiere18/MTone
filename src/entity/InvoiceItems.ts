import { Column, Entity , ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import { Invoices } from "./Invoices";
import Model from "./Model";
 
@Entity()
export class InvoiceItems   {
   @PrimaryGeneratedColumn()
   id: number;
  
   @Column()
   prod_name: string
   @Column()
   quantiy: number
   @Column()
   prix_unit: number
 
   @ManyToOne(() => Invoices, invoice => invoice.invoice_items)
   invoice: Invoices;
 
}
