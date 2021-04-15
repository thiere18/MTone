import { Category } from '../../entity/Category';
import { Request, Response } from "express";
import { getRepository } from "typeorm";

// 
export const createCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const newCategory = getRepository(Category).create(req.body);
    const results = await getRepository(Category).save(newCategory);
    return res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getCategories = async (
  _: Request,
  res: Response
) => {
try {
  const category = await getRepository(Category).find();
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
  const results = await getRepository(Category).findOne(req.params.id);
  return res.status(200).json(results);
} catch (error) {
  console.log(error.message);
  return res.status(500).json(error);

}
};


export const updateCategory = async (
  req: Request,
  res: Response
) => {
  const category = await getRepository(Category).findOne(req.params.id);
try {
  if (category) {
    getRepository(Category).merge(category, req.body);
    const results = await getRepository(Category).save(category);
    return res.status(200).json(results);
  }

  return res.json({ msg: 'Not category found' });
} catch (error) {
  console.log(error);
  return res.status(500).json(error);

}
};

export const deleteCategory = async (req: Request, res: Response) => {
try {
  const results = await getRepository(Category).delete(req.params.id);
  return res.status(200).json(results);
} catch (error) {
  console.log(error);
  return res.status(500).json(error);
}
};