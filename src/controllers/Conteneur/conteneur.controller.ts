import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Conteneur } from '../../entity/Conteneur';
import {Magasin} from '../../entity/Magasin'; 
export const createConteneur = async (
    req: Request,
    res: Response
) => {
  try {
  // save container
  const newContneur = getRepository(Conteneur).create(req.body);

  const results = await getRepository(Conteneur).save(newContneur);
  console.log(req.body.reference)
    const { reference, prix_transport, local_charge, dechargement, prix_achat, frais_voyage } = req.body
    // update capital
  const sum = await (Number(prix_achat) + Number(local_charge) + Number(dechargement) + Number(prix_transport) + Number(frais_voyage));
  let result = await getRepository(Magasin).findOne({ id: 1 });
  if (result) {
      result.montant=result.montant+Number(sum);
      await Magasin.save(result);
  }
  
  console.log(sum)
  return res.json(results);

} catch (error) {
  console.log(error);
  return res.status(500).json(error);
}
  };
  //     return res.

  export const getConteneurs = async (
  _: Request,
    res: Response
  ) => {
  try {
    const conteneur = await getRepository(Conteneur).find({isDeleted:false});
    return res.status(200).json(conteneur);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);

  }
  };

  export const getConteneur = async (
    req: Request,
    res: Response
  ) => {
try {
    const results = await getRepository(Conteneur).findOne({uuid: req.params.uuid,isDeleted:false});
  return res.status(200).json(results);

} catch (error) {
  console.log(error);
  return res.status(500).json(error);

}
  };
  

  export const updateConteneur = async (
    req: Request,
    res: Response
  ) => {
try {
  const conteneur = await getRepository(Conteneur).findOne({ uuid: req.params.uuid });
  if (conteneur) {
    getRepository(Conteneur).merge(conteneur, req.body);
    const results = await getRepository(Conteneur).save(conteneur);
    return res.status(200).json(results);
  }

  return res.json({msg: 'Not user found'});
} catch (error) {
  console.log(error);
  res.status(500).json({msg:"erorr 500"})
}
  };
  
  export const deleteConteneur = async (req: Request, res: Response) => {
    try {
        let result = await getRepository(Conteneur).findOne({ uuid: req.params.uuid });
        if (result) {
            result.isDeleted=true;
            await Conteneur.save(result);
        }
       
    return res.status(200).json(result);
  
    } catch (error) {
      console.log(error);
  return res.status(500).json(error);

}
  };
  