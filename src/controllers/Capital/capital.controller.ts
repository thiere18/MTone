import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Magasin } from '../../entity/Magasin';
// 
export const createCapital = async (
    req: Request,
    res: Response
) => {
try {
  const newCapital = getRepository(Magasin).create(req.body);
  const results = await getRepository(Magasin).save(newCapital);
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
  export const getCapitals = async (
  _: Request,
    res: Response
  ) => {
  try {
    const capital = getRepository(Magasin).find({isDeleted:false});
    return res.status(200).json(capital);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);

  }
  };

  export const getCapital = async (
    req: Request,
    res: Response
  ) => {
try {
    const results = await getRepository(Magasin).findOne({uuid: req.params.uuid,isDeleted:false});
  return res.status(200).json(results);

} catch (error) {
  console.log(error);
  return res.status(500).json(error);

}
  };
  

  export const updateCapital = async (
    req: Request,
    res: Response
  ) => {
try {
  const capital = await getRepository(Magasin).findOne({ uuid: req.params.uuid });
  if (capital) {
    getRepository(Magasin).merge(capital, req.body);
    const results = await getRepository(Magasin).save(capital);
    return res.status(200).json(results);
  }

  return res.json({msg: 'Not user found'});
} catch (error) {
  console.log(error);
  res.status(500).json({msg:"erorr 500"})
}
  };
  
  export const deleteCapital = async (req: Request, res: Response) => {
    try {
        let result = await getRepository(Magasin).findOne({ uuid: req.params.uuid });
        if (result) {
            result.isDeleted=true;
            await Magasin.save(result);
        }
       
    return res.status(200).json(result);
  
    } catch (error) {
      console.log(error);
  return res.status(500).json(error);

}
  };
  