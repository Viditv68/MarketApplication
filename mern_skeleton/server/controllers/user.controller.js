import User from '../models/user.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => { 
const user = new User(req.body) 
try {
await user.save()
return res.status(200).json({ 
message: "Successfully signed up!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const list = async (req, res) => { 
    let users;
try {
    if(req.query.name)
    {
        users = await User.find({"name" : {$regex : req.query.name}}).select('name description price quantity category')
    }
    else
    {
        users = await User.find().select('name description price quantity category')

    }

res.json(users)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const userByID = async (req, res, next, id) => { 
try {
let user = await User.findById(id) 
if (!user)
return res.status('400').json({ 
error: "User not found"
})
req.profile = user 
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve user"
}) 
}
}
const read = (req, res) => {
//req.profile.userByID = undefined 
return res.json(req.profile) 
}
const update = async (req, res) => { 
try {
let user = req.profile
user = extend(user, req.body) 
//user.updated = Date.now() 
await user.save()
res.json(user) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const remove = async (req, res) => { 
try {
let user = req.profile
let deletedItem = await user.deleteOne() 
res.json(deletedItem) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const deleteAll = async (req, res) => { 
    try {
    let deletedItem = await User.find().deleteMany() 
    res.json(deletedItem) 
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err) 
    })
    } 

}
export default { create, userByID, read, list, remove, update, deleteAll}

