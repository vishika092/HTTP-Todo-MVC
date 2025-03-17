import { homeGETController, userGetController,userDataGetController, userPostController,userPutController, userDeleteController ,todoPOSTController, todoGetController, todoPutController, todoDeleteController} from "../controller/index.js"

let Router = {
    "/" : {
        GET : {
            "/" :  homeGETController
    }},

    "/user" : {
        GET :  {
            "/user" : userGetController,
            "/user/data" : userDataGetController

        },
        POST : {
            "/user/register" : userPostController
        },
        PUT : {
            "/user/update" : userPutController
        },
        DELETE : {
            "/user" : userDeleteController
        }
    },
    "/todos" :  {
        GET : {
            "/todos" : todoGetController
        },
        POST : {
            "/todos/register" : todoPOSTController
        },
        PUT : {
            "/todos/update" : todoPutController
        },
        DELETE : {
            "/todos" : todoDeleteController
        }
    }
}

export {Router}