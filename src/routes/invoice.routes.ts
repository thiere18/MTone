import { Router } from "express";
const router = Router();

import {
  createInvoice,
  getInvoiceDetails,
  getinvoices,
//   searchArticle
} from "../controllers/Invoices/invoices.controller";

router.post('/invoice', createInvoice)
router.get('/invoice/client/:client_id',getinvoices)
router.get('/invoice/client/:client_id/:invoice_id',getInvoiceDetails)
export default router;