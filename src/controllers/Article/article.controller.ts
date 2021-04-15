import { Article } from '../../entity/Article';
import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";

// 
export const createArticle = async (
    req: Request,
    res: Response
) => {
try {
    const newArticle =  getRepository(Article).create(req.body);
    const results = await getRepository(Article).save(newArticle);
    return res.status(200).json(results);
} catch (error) {
    console.log(error);
    return res.status(500).json(error);
    
}
  };
  
  export const getArticles = async (
    _: Request,
    res: Response
  ) => {
try {
    const article = await getRepository(Article).find();
    return res.json(article);
} catch (error) {
    console.log(error);
    return res.status(500).json(error);
}
  };

  export const getArticle = async (
    req: Request,
    res: Response
  ) => {
try {
    const results = await getRepository(Article).findOne(req.params.id);
    return res.status(200).json(results);
} catch (error) {
    console.log(error);
    return res.status(500).json(error);
}
  };
  

  export const updateArticle = async (
    req: Request,
    res: Response
  ) => {
try {
    const article = await getRepository(Article).findOne(req.params.id);
    if (article) {
      getRepository(Article).merge(article, req.body);
      const results = await getRepository(Article).save(article);
      return res.json(results);
    }
  
    return res.json({msg: 'Not article found'});
} catch (error) {
    console.log(error);
    return res.status(500).json(error);
}
  };
  
  export const deleteArticle = async (req: Request, res: Response) => {
try {
    const results = await getRepository(Article).delete(req.params.id);
    return res.json(results);
} catch (error) {
    console.log(error);
    return res.status(500).json(error);
}
  };

//
// export const searchArticle = async(
//     req: Request,
//     res: Response
// ) => {
//     try {
        
//     const article=await getRepository(Article).find({
//         name: Like(`%$%`)
//     });
//         if(article.length>0)
//             return res.status(200).json(article)
//         console.log(req.params.q)
//         return res.status(201).json({msg:"pas de resultats"});
// } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
// }


  