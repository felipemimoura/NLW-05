import { io } from '../http'
import { ConnectionsServices } from '../services/ConnetcionsServices'
import { UserServices } from '../services/UserServices'

io.on("connect", (socket) => {
  const connectionsServices = new ConnectionsServices()
  const userService = new UserServices()


  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id
    const { text, email } = params

    const userExists = await userService.findByEmail(email)

    if (!userExists) {
      const user = await userService.create(email)
      await connectionsServices.create({
        socket_id,
        user_id: user.id

      })
    }else{
      await connectionsServices.create({
        socket_id,
        user_id: userExists.id
      })
    }
  })
})