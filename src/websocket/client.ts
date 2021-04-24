import { io } from '../http'
import { ConnectionsServices } from '../services/ConnetcionsServices'
import { MessagesServices } from '../services/MessagesServices'
import { UserServices } from '../services/UserServices'


interface IParams{
  text: string,
  email: string
}
io.on("connect", (socket) => {
  const connectionsServices = new ConnectionsServices()
  const userService = new UserServices()
  const messagesService = new MessagesServices()
  
  
  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id
    const { text, email } = params as IParams
    let user_id = null

    const userExists = await userService.findByEmail(email)

    if (!userExists) {
      const user = await userService.create(email)
      await connectionsServices.create({
        socket_id,
        user_id: user.id

      })
      user_id = user.id
    }else{
      user_id = userExists.id
      const connection = await connectionsServices.findByUserId(userExists.id)

      if(!connection){
        await connectionsServices.create({
          socket_id,
          user_id: userExists.id
        })
      }else {
        connection.socket_id = socket_id
        await connectionsServices.create(connection)
      }
    }

    await messagesService.create({
      text,
      user_id
    })
  })
})