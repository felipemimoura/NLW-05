import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Settings"
import { SettingsRepository } from "../repositories/SettingsRepositories"

interface ISettingsCreate {
  chat: boolean,
  username: string
}

class SettingsServices {
  private settingsRepository : Repository<Setting>

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository)

  }
  async create({ chat, username }: ISettingsCreate) {

    const userAlreadyExists = await this.settingsRepository.findOne({ username })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const settings = this.settingsRepository.create({
      chat,
      username
    })

    await this.settingsRepository.save(settings)

    return settings
  }
}

export { SettingsServices }