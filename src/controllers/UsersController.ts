import {Request, Response} from 'express'
import { UserServices } from '../services/UserServices'

class UsersController{
  async create(request: Request, response: Response): Promise<Response>{
    const {email} = request.body
    const usersServices = new UserServices()

   const user =  await usersServices.create(email)
   return response.json(user)
  }
}

export {UsersController}