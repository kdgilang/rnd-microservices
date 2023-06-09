import { Request, Response, } from 'express'
import { validationResult } from 'express-validator'
import { IUserModel } from '../models/userModel';
import addUserRepository from '../repositories/addUserRepository'

export default async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ ...errors })
  }

  const userReq = req.body as IUserModel;
  
  try {
    const {
      password,
      ...userRes
    } = await addUserRepository(userReq)

    res.json(userRes)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}