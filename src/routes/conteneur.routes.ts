import { Router } from "express";
const router = Router();

import {
  getConteneur,
  getConteneurs,
  createConteneur,
  updateConteneur,
  deleteConteneur
} from "../controllers/Conteneur/conteneur.controller";


/**
 * @swagger
 * components:
 *   schemas:
 *     Conteneur:
 *       type: object
 *       required:
 *         - reference
 *         - prix_acht
 *         - prix_transport
 *         - frais_dedouanement
 *         - local_charge
 *       properties:
 *         uuid:
 *           type: string
 *           description: The auto-generated uuid of the conteneur
 *         reference:
 *           type: string
 *           description: The conteneur reference
 *         prix_achat:
 *           type: number
 *           description: prix achat conteneur
 *         prix_transport:
 *           type: number
 *           description: prix transport conteneur
 *         frais_dedouanement:
 *           type: number
 *           description: frais dedouanement conteneur
 *         local_charge:
 *           type: number
 *           description: frais de dedouanement conteneur
 *         frais_voyage: 
 *           type: number
 *           description: frqais de voyage 
 *       example:
 *         reference: conteneur123033/ww
 *         prix_acht: 20000000
 *         prix_transport: 20000
 *         frais_dedouanement: 2500
 *         quantity_per_carton
 *         local_charge: 2345
 *         frais_voyage: 12345
 *         
 */


/**
  * @swagger
  * tags:
  *   name: Conteneur 
  *   description:  Conteneur managing API
  */

/**
 * @swagger
 * /conteneur:
 *   get:
 *     summary: Returns the list of all Conteneur
 *     tags: [Conteneur]
 *     responses:
 *       200:
 *         description: The list of all conteneur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Conteneur'
 */

router.get("/conteneur", getConteneurs);

/**
 * @swagger
 * /conteneur/{uuid}:
 *   get:
 *     summary: Get the conteneur by uuid
 *     tags: [Conteneur]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The conteneur uuid
 *     responses:
 *       200:
 *         description: The conteneur description by uuid
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conteneur'
 *       404:
 *         description: The conteneur was not found
 */
router.get("/conteneur/:uuid", getConteneur); //
/**
 * @swagger
 * /conteneur:
 *   post:
 *     summary: Create a new conteneur
 *     tags: [Conteneur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conteneur'
 *     responses:
 *       200:
 *         description: The Conteneur was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conteneur'
 *       500:
 *         description: Some server error
 */
router.post("/conteneur", createConteneur);
/**
 * @swagger
 * /conteneur/{uuid}:
 *  put:
 *    summary: Update the conteneur by the uuid
 *    tags: [Conteneur]
 *    parameters:
 *      - in: path
 *        name: uuid
 *        schema: 
 *          type: string
 *        required: true
 *        description: The conteneur uuid
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/conteneur'
 *    responses:
 *      200:
 *        description: The conteneur was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/conteneur'
 *      404:
 *        description: The conteneur was not found
 *      500:
 *        description: Some error happened
 */
router.put("/conteneur/:uuid", updateConteneur);

/**
 * @swagger
 * /conteneur/{uuid}:
 *   delete:
 *     summary: Remove the conteneur by uuid
 *     tags: [Conteneur]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The conteneur uuid
 * 
 *     responses:
 *       200:
 *         description: The conteneur was deleted
 *       404:
 *         description: The conteneur was not found
 */
router.put("/conteneur/:uuid", deleteConteneur);

export default router;
