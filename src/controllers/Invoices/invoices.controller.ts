import { query, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Invoices } from '../../entity/Invoices';
import { InvoiceItems } from "../../entity/InvoiceItems";
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
  let sql = `INSERT INTO invoices(
    reference,
    value_net,
    actual_payment,
    payment_due,
    clientId,
  )
  VALUES(
    '${req.body.reference}',
    '${req.body.total}',
    '${req.body.avance}',
    '${req.body.dette}',
    '${req.body.client_id}',
  )`;

  let updateCapital=` UPDATE magasin SET montant = montant + ${req.body.total} WHERE id =1}`
  db.query(sql, (err, result) => {
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
    let query = `INSERT INTO
                  invoice_items(
                    prod_name,
                    quantity,
                    price,
                    invoiceId,
                  ) VALUES(
                    '${req.body.prod_name[i]}',
                    '${req.body.quantity[i]}',
                    '${req.body.price[i]}',
                    '${invoice_id}'
                  )`;
                  db.query(query, (err, result) => {
                    if (err) throw err;
                    console.log('item added')
                
                  })
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