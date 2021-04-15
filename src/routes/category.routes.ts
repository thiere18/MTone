import { Router } from "express";
const router = Router();

import {
  getCategory,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from "../controllers/Category/category.controller";


/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The category name
 *       example:
 *         id: 4
 *         name: papier
 */


/**
  * @swagger
  * tags:
  *   name: Category 
  *   description:  Category managing API
  */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Returns the list of all Category
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: The list of all category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */

router.get("/category", getCategories);

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 */
router.get("/category/:id", getCategory);
/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The Category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
router.post("/category", createCategory);
/**
 * @swagger
 * /categry/{id}:
 *  put:
 *    summary: Update the categry by the id
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: The categry id
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
router.put("/category/:id", updateCategory);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Remove the category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 * 
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */
router.delete("/category/:id", deleteCategory);

export default router;
