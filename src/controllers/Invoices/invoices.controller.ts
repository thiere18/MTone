import { query, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Invoices } from '../../entity/Invoices';
import { InvoiceItems } from "../../entity/InvoiceItems";
import {Magasin} from "../../entity/Magasin";
import mysql from 'mysql'
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mtone',
})
export const createInvoice = async (
    req: Request,
    res: Response
) => {
try {
  // let sql = `INSERT INTO invoices(
  //   reference,
  //   value_net,
  //   actual_payment,
  //   payment_due,
  //   clientId,
  // )
  // VALUES(
  //   '${req.body.reference}',d
  //   '${req.body.total}',d
  //   '${req.body.avance}',
  //   '${req.body.dette}',
  //   '${req.body.client_id}',
  // )`;
  const newInvoice = getRepository(Invoices).create(req.body);
  const results = await getRepository(Invoices).save(newInvoice);

  let updateCapital = ` UPDATE magasin SET montant = montant + ${req.body.total} WHERE id =1}`
  let result = await getRepository(Magasin).findOne({ id: 1 });
  if (result) {
      result.montant=result.montant+req.body.total;
      await Magasin.save(result);
  }
  db.query(updateCapital, (err, result) => {
    if (err) throw err;
    res.send('invoice created')

  })

  const last = (tableName:string) => {
    let sql =  `SELECT id FROM ${tableName} ORDER BY id DESC LIMIT 1`
    let res=db.query(sql, (err, result) => {
      if (err) throw err;
      return result
    })
    return res
  }
  let invoice_id= last('invoices')
  
  for (let i = 0; i < req.body.prod_name.length; i++) {
    let data = {
      prod_name: req.body.prod_name[i],
      quantity: req.body.quantity[i],
      price: req.body.price[i],
      invoiceId: invoice_id
      
    }
    const items = await getRepository(InvoiceItems).save(data);


    let f = ` UPDATE article SET quantity_left = quantity_left + ${req.body.quantity[i]} WHERE designation = ${req.body.prod_name[i]}`
    db.query(f, (err, result) => {
      if (err) throw err;
      console.log('quantity updated')
    })

  }

} catch (error) {
  console.log(error);
  return res.status(500).json(error);
}
};
export const getinvoices = async (
  req: Request,
    res: Response
  ) => {
  try {
    let sql = `SELECT * FROM invoices WHERE clientId='${req.params.client_id}' ORDER BY invoice.id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      return res.json({
        "status": true,
        "invoices": rows
      })    
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);

  }
};
  

export const getInvoiceDetails = async (
  req: Request,
    res: Response
  ) => {
  try {
    let sql = `SELECT * FROM invoices LEFT JOIN invoice_items ON invoices.id=transactions.invoice_id WHERE clientId='${req.params.client_id}' AND invoiceId='${req.params.invoice_id}' ORDER BY invoice_items.id`;
    db.query(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
  
      return res.json({
        "status": true,
        "transactions": rows
      });
    });
  
    
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);

  }
};
  
export const deleteInvoice = async (req: Request, res: Response) => {
  try {
      let result = await getRepository(Invoices).findOne({ uuid: req.params.uuid });
      if (result) {
          result.isDeleted=true;
          await Invoices.save(result);
      }
     
  return res.status(200).json(result);

  } catch (error) {
    console.log(error);
return res.status(500).json(error);

}
};
