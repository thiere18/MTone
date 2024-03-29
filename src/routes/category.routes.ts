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
 *         uuid:
 *           type: string
 *           description: The auto-generated uuid of the category
 *         name:
 *           type: string
 *           description: The category name
 *       example:
 *         uuid: 4
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
 * /category/{uuid}:
 *   get:
 *     summary: Get the category by uuid
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The category uuid
 *     responses:
 *       200:
 *         description: The category description by uuid
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 */
router.get("/category/:uuid", getCategory);
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
 * /categry/{uuid}:
 *  put:
 *    summary: Update the categry by the uuid
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: uuid
 *        schema: 
 *          type: string
 *        required: true
 *        description: The categry uuid
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
router.put("/category/:uuid", updateCategory);

/**
 * @swagger
 * /category/{uuid}:
 *   delete:
 *     summary: Remove the category by uuid
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The category uuid
 * 
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */
router.put("/category/:uuid", deleteCategory);

export default router;
