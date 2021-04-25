import { http } from "./http";
import "./websocket/client"
import "./websocket/admin"



http.listen(3001, () => console.log("Server is running on port 3001"))