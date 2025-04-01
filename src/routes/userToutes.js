const userController = require("../controller/userController")
module.exports = (app)=>{
    app.post('/activity/test', userController.activity);
}