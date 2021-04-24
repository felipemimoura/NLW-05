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
  async findByUsername(request: Request, response: Response){
    const {username} = request.params

    const settingServices = new SettingsServices()

    const settings = await settingServices.findByUsername(username)

    return response.json(settings)
  }
  async update(request: Request, response: Response){
    const {username} = request.params
    const {chat} = request.body

    const settingServices = new SettingsServices()

    const settings = await settingServices.update(username, chat)

    return response.json(settings)
  }
}

export {SettingsController}