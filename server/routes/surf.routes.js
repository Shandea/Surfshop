// TODO: connect controller to the routes
const UserController = require("../controllers/surf.controller")


module.exports = app => {
   
    app.get("/find/:username/:password", UserController.findUser),
        
    app.post("/createNewUser", UserController.create),
           
    app.get('/getUser/:id', UserController.getUser)

}