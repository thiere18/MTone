import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Article} from '../../entity/Article';
// 
export const createArticle = async (
    req: Request,
    res: Response
) => {
try {
  const newArticle = getRepository(Article).create(req.body);
  const results = await getRepository(Article).save(newArticle);
  return res.json(results);
} catch (error) {
  console.log(error);
  return res.status(500).json(error);
}
  };
  //     return res.
export const endpoint = async (req: Request, res: Response) => {
      res.send("beinvnue petite merd")
  }
  export const getArticles= async (
  _: Request,
    res: Response
  ) => {
  try {
    const article = await getRepository(Article).find({isDeleted:false});
    return res.status(200).json(article);
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
    const results = await getRepository(Article).findOne({uuid: req.params.uuid,isDeleted:false});
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
  const article = await getRepository(Article).findOne({ uuid: req.params.uuid });
  if (article) {
    getRepository(Article).merge(article, req.body);
    const results = await getRepository(Article).save(article);
    return res.status(200).json(results);
  }

  return res.json({msg: 'Not user found'});
} catch (error) {
  console.log(error);
  res.status(500).json({msg:"erorr 500"})
}
  };
  
  export const deleteArticle = async (req: Request, res: Response) => {
    try {
        let result = await getRepository(Article).findOne({ uuid: req.params.uuid });
        if (result) {
            result.isDeleted=true;
            await Article.save(result);
        }
       
    return res.status(200).json(result);
  
    } catch (error) {
      console.log(error);
  return res.status(500).json(error);

}
  };
  