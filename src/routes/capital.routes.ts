import { Router } from "express";
const router = Router();

import {
  getCapital,
  getCapitals,
  createCapital,
  updateCapital,
  deleteCapital
} from "../controllers/Capital/capital.controller";


/**
 * @swagger
 * components:
 *   schemas:
 *     Capital:
 *       type: object
 *       required:
 *         - montant
 *       properties:
 *         uuid:
 *           type: string
 *           description: The auto-generated uuid of the capital
 *         montant:
 *           type: number
 *           description: The capital name
 *       example:
 *         montant :5000
 */


/**
  * @swagger
  * tags:
  *   name: Capital 
  *   description:  Capital managing API
  */

/**
 * @swagger
 * /capital:
 *   get:
 *     summary: Returns the list of all Capital
 *     tags: [Capital]
 *     responses:
 *       200:
 *         description: The list of all capital
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Capital'
 */

router.get("/capital", getCapital);

/**
 * @swagger
 * /capital/{uuid}:
 *   get:
 *     summary: Get the capital by uuid
 *     tags: [Capital]
 *     parameters:
 *       - in: path
 *         montant: number
 *         schema:
 *           type: number
 *         required: true
 *         description: The capital montanat
 *     responses:
 *       200:
 *         description: The capital description by uuid
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Capital'
 *       404:
 *         description: The capital was not found
 */
router.get("/capital/:uuid", getCapitals); //
/**
 * @swagger
 * /capital:
 *   post:
 *     summary: Create a new capital
 *     tags: [Capital]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Capital'
 *     responses:
 *       200:
 *         description: The Capital was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Capital'
 *       500:
 *         description: Some server error
 */
router.post("/capital", createCapital);
/**
 * @swagger
 * /categry/{uuid}:
 *  put:
 *    summary: Update the categry by the uuid
 *    tags: [Capital]
 *    parameters:
 *      - in: path
 *        montant: number
 *        schema: 
 *          type: number
 *        required: true
 *        description: The categry montant
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categry'
 *    responses:
 *      200:
 *        description: The categry was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Categry'
 *      404:
 *        description: The categry was not found
 *      500:
 *        description: Some error happened
 */
router.put("/capital/:uuid", updateCapital);
 
/**
 * @swagger
 * /capital/{uuid}:
 *   delete:
 *     summary: Remove the capital by uuid
 *     tags: [Capital]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The capital uuid
 * 
 *     responses:
 *       200:
 *         description: The capital was deleted
 *       404:
 *         description: The capital was not found
 */
router.put("/capital/:uuid", deleteCapital);

export default router;
