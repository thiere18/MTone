import { Router } from "express";
const router = Router();

import {
  getDepot,
  getDepots,
  createDepot,
  updateDepot,
  deleteDepot
} from "../controllers/Depot/depot.controller";


/**
 * @swagger
 * components:
 *   schemas:
 *     Depot:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the depot
 *         name:
 *           type: string
 *           description: The depot name
 *       example:
 *         id: 4
 *         name: depot Dakar
 */

/**
  * @swagger
  * tags:
  *   name: Depot
  *   description: Depot managing API
  */


/**
 * @swagger
 * /depot:
 *   get:
 *     summary: Returns the list of all Depot
 *     tags: [Depot]
 *     responses:
 *       200:
 *         description: The list of all depot
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Depot'
 */
router.get("/depot", getDepots);

/**
 * @swagger
 * /depot/{id}:
 *   get:
 *     summary: Get the depot by id
 *     tags: [Depot]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The depot id
 *     responses:
 *       200:
 *         description: The depot description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Depot'
 *       404:
 *         description: The depot was not found
 */

router.get("/depot/:id", getDepot);

/**
 * @swagger
 * /depot:
 *   post:
 *     summary: Create a new depot
 *     tags: [Depot]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Depot'
 *     responses:
 *       200:
 *         description: The Depot was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Depot'
 *       500:
 *         description: Some server error
 */

router.post("/depot", createDepot);

/**
 * @swagger
 * /depot/{id}:
 *  put:
 *    summary: Update the depot by the id
 *    tags: [Depot]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The depot id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Depot'
 *    responses:
 *      200:
 *        description: The depot was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Depot'
 *      404:
 *        description: The depot was not found
 *      500:
 *        description: Some error happened
 */
router.put("/depot/:id", updateDepot);

/**
 * @swagger
 * /depot/{id}:
 *   delete:
 *     summary: Remove the depot by id
 *     tags: [Depot]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The depot id
 * 
 *     responses:
 *       200:
 *         description: The depot was deleted
 *       404:
 *         description: The depot was not found
 */
router.delete("/depot/:id", deleteDepot);

export default router;
