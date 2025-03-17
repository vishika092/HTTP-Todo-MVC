import https from "https"
import fs from "fs"
import {httpServer} from "./controller/index.js"

let httpsPort = 8081;

let options = {
    key :  fs.readFileSync("./utils/ssl-keys/privkey.pem"),
    cert : fs.readFileSync("./utils/ssl-keys/fullchain.pem")
}

let httpsServer = https.createServer(options, httpServer)


httpsServer.listen(httpsPort, () => {
    console.log("Server Running at ", httpsPort);
})