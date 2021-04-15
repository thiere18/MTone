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
 *         - prix_client 
 *         - frais
 *         - prix_magasin
 *         - quantity_init
 *         - quantity_left
 *         - conteneurId
 *         - categoryId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the article
 *         name:             
 *           type: string
 *           description: The article name
 *         prix_achat:
 *           type: number
 *           description: prix_achat of the article
 *         prix_gros: 
 *           type: number
 *           descripton: prix en gros de  l'article
 *         prix_client:
 *           type: number
 *           description: prix de vente pour client
 *         quantity_init:
 *           type: number
 *           description: quantite initiale 
 *         quantity_left:
 *           type: number
 *           description: quantite restante de l'article
 *         conteneurId:
 *           type: number
 *           description: Id du contenur d'ou il vient
 *         categoryId:
 *           type: number
 *           description: id du article auquel l'article est rattache
 *       example:
 *         id: 4
 *         name: papier
 *         quantity_init: 234
 *         quantity_left: 23
 *         prix_achat: 500
 *         frais: 25
 *         prix_client: 900
 *         prix_gros: 850
 *         prix_revient: 50
 *         prix_magasin: 900
 *         conteneurId: 3
 *         categoryId: 2
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
 * /article/{id}:
 *   get:
 *     summary: Get the article by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: The article description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: The article was not found
 */
router.get("/article/:id", getArticle);
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
 * /article/{id}:
 *  put:
 *    summary: Update the article by the id
 *    tags: [Article]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: The article id
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
router.put("/article/:id", updateArticle);

/**
 * @swagger
 * /article/{id}:
 *   delete:
 *     summary: Remove the article by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 * 
 *     responses:
 *       200:
 *         description: The article was deleted
 *       404:
 *         description: The article was not found
 */
router.delete("/article/:id", deleteArticle);


export default router;


