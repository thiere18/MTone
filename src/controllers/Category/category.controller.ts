import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from '../../entity/Category';
// 
export const createCategory = async (
    req: Request,
    res: Response
) => {
try {
  const newCategrity = await getRepository(Category).create(req.body);
  const results = await getRepository(Category).save(newCategrity);
  return res.json(results);
} catch (error) {
  console.log(error);
  return res.status(500).json(error);
}
  };
  //     return res.

  export const getCategories = async (
  _: Request,
    res: Response
  ) => {
  try {
    const category = await getRepository(Category).find({isDeleted:false});
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);

  }
  };

  export const getCategory = async (
    req: Request,
    res: Response
  ) => {
try {
    const results = await getRepository(Category).findOne({uuid: req.params.uuid,isDeleted:false});
  return res.status(200).json(results);

} catch (error) {
  console.log(error);
  return res.status(500).json(error);

}
  };
  

  export const updateCategory = async (
    req: Request,
    res: Response
  ) => {
try {
  const category = await getRepository(Category).findOne({ uuid: req.params.uuid });
  if (category) {
    getRepository(Category).merge(category, req.body);
    const results = await getRepository(Category).save(category);
    return res.status(200).json(results);
  }

  return res.json({msg: 'Not user found'});
} catch (error) {
  console.log(error);
  res.status(500).json({msg:"erorr 500"})
}
  };
  
  export const deleteCategory = async (req: Request, res: Response) => {
    try {
        let result = await getRepository(Category).findOne({ uuid: req.params.uuid });
        if (result) {
            result.isDeleted=true;
            await Category.save(result);
        }
       
    return res.status(200).json(result);
  
    } catch (error) {
      console.log(error);
  return res.status(500).json(error);

}
  };
  