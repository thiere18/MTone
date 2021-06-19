import { Column, Entity , OneToMany,ManyToOne} from "typeorm";
import Model from "./Model";
import { Client } from "./Client";
import {InvoiceItems} from "./InvoiceItems";
@Entity()
export class Invoices extends Model {
    @Column()
    reference: string;
    @Column({ default: false })
    status: boolean
    @Column({nullable:true})
    value_net: number
    @Column({nullable:true})
    actual_payment: number
    @Column({nullable:true})
    payment_due: number
 
        @ManyToOne(() => Client, client => client.invoices)
        client: Client;
    @OneToMany(() => InvoiceItems, invoice_item => invoice_item.invoice)
    invoice_items: InvoiceItems[];
}
