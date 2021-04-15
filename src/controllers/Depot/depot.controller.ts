import { Request, Response } from "express";
import { getRepository } from "typeorm";
import {Depot} from "../../entity/Depot"
// 
export const createDepot = async (
    req: Request,
    res: Response
) => {
try {
  const newDepot = getRepository(Depot).create(req.body);
  const results = await getRepository(Depot).save(newDepot);
  return res.json(results);
} catch (error) {
  console.log(error);
  return res.status(500).json(error);
}
  };
  
  export const getDepots = async (
  _: Request,
    res: Response
  ) => {
  try {
    const depot = await getRepository(Depot).find();
    return res.status(200).json(depot);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);

  }
  };

  export const getDepot = async (
    req: Request,
    res: Response
  ) => {
try {
  const results = await getRepository(Depot).findOne(req.params.id);
  return res.status(200).json(results);

} catch (error) {
  console.log(error);
  return res.status(500).json(error);

}
  };
  

  export const updateDepot = async (
    req: Request,
    res: Response
  ) => {
try {
  const depot = await getRepository(Depot).findOne(req.params.id);
  if (depot) {
    getRepository(Depot).merge(depot, req.body);
    const results = await getRepository(Depot).save(depot);
    return res.status(200).json(results);
  }

  return res.json({msg: 'Not user found'});
} catch (error) {
  console.log(error);
  res.status(500).json({msg:"erorr 500"})
}
  };
  
  export const deleteDepot = async (req: Request, res: Response) => {
    try {
      const results = await getRepository(Depot).delete(req.params.id);
    return res.status(200).json(results);
  
    } catch (error) {
      console.log(error);
  return res.status(500).json(error);

}
  };
  