import { Router } from "express";
const router = Router();

import {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
//   searchArticle
} from "../controllers/Article/article.controller";


/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - name
 *         - prix_achat
 *         - prix_gros
 *         - quantity_per_carton 
 *         - frais
 *         - prix_magasin
 *         - quantity_init
 *         - quantity_left
 *         - conteneuruuid
 *         - categoryuuid
 *       properties:
 *         uuid:
 *           type: string
 *           description: The auto-generated uuid of the article
 *         name:             
 *           type: string
 *           description: The article name
 *         prix_achat:
 *           type: number
 *           description: prix_achat of the article
 *         prix_gros: 
 *           type: number
 *           descripton: prix en gros de  l'article
 *         quantity_per_carton:
 *           type: number
 *           description: quantite de carton
 *         quantity_init:
 *           type: number
 *           description: quantite initiale 
 *         quantity_left:
 *           type: number
 *           description: quantite restante de l'article
 *         conteneuruuid:
 *           type: number
 *           description: uuid du contenur d'ou il vient
 *         categoryuuid:
 *           type: number
 *           description: uuid du article auquel l'article est rattache
 *       example:
 *         name: papier
 *         quantity_init: 234
 *         quantity_left: 23
 *         prix_achat: 500
 *         frais: 25
 *         prix_client: 900
 *         prix_gros: 850
 *         prix_revient: 50
 *         prix_magasin: 900
 *         conteneuruuid: 3
 *         categoryuuid: 2
 * 
 */


/**
  * @swagger
  * tags:
  *   name: Article 
  *   description:  Article managing API
  */

/**
 * @swagger
 * /article:
 *   get:
 *     summary: Returns the list of all Article
 *     tags: [Article]
 *     responses:
 *       200:
 *         description: The list of all article
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */

router.get("/article", getArticles);

/**
 * @swagger
 * /article/{uuid}:
 *   get:
 *     summary: Get the article by uuid
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The article uuid
 *     responses:
 *       200:
 *         description: The article description by uuid
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: The article was not found
 */
router.get("/article/:uuid", getArticle);
/**
 * @swagger
 * /article:
 *   post:
 *     summary: Create a new article
 *     tags: [Article]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: The Article was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       500:
 *         description: Some server error
 */
router.post("/article", createArticle);


/**
 * @swagger
 * /article/search:
 *   post:
 *     summary: Recherche d'article ar nom
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: The article name
 * 
 *     responses:
 *       200:
 *         description: The article was deleted
 *       404:
 *         description: The article was not found
 */
// router.post("/article/search",searchArticle);

/**
 * @swagger
 * /article/{uuid}:
 *  put:
 *    summary: Update the article by the uuid
 *    tags: [Article]
 *    parameters:
 *      - in: path
 *        name: uuid
 *        schema: 
 *          type: string
 *        required: true
 *        description: The article uuid
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categry'
 *    responses:
 *      200:
 *        description: The article was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Categry'
 *      404:
 *        description: The article was not found
 *      500:
 *        description: Some error happened
 */
router.put("/article/:uuid", updateArticle);

/**
 * @swagger
 * /article/{uuid}:
 *   delete:
 *     summary: Remove the article by uuid
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The article uuid
 * 
 *     responses:
 *       200:
 *         description: The article was deleted
 *       404:
 *         description: The article was not found
 */
router.delete("/article/:uuid", deleteArticle);


export default router;


