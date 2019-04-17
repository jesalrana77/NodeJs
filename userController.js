const userService = require('../Services/service')
const constants = require('../Constants/constants')
module.exports.createUser = async(req, res, next) => {
    let responseObj = {}
    try{
            let data = req.body
            console.log('req.body', data)
            let responseFormService = await userService.createUser(data)
            switch(responseFromService.status){
                case constants.serviceStatus.USER_CREATED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
                responseObj.body = responseFormService.body
                break
                default:
                responseObj = constants.responseObj
                break
            }
            return res.status(responseObj.status).send(responseObj)
    }catch(err){
        console.log("Something went wrong in controller", err)
        responseObj = constants.responseObj
        return res.status(responseObj.status).send(responseObj)
    }
}