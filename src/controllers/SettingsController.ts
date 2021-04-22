import {Request, Response} from 'express'
import { SettingsServices } from '../services/SettingsServices'

class SettingsController{
  async create(request: Request, response: Response){
    const {chat, username } = request.body

    const settingServices = new SettingsServices()
    try {
      const settings = await settingServices.create({chat, username})
      return response.json(settings)
    } catch (error) {
      return response.status(400).send(error.message)
    }
  
  }
}

export {SettingsController}