import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler( async (req, res, next) => {
    let token = req.headers.authorization
    if (token && token.startsWith('Bearer')) {
      try {
        // console.log('token found');
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        //here it is id
        console.log(decoded);
        //fetch the user
          req.user = await User.findById(decoded.id).select("-password")
          
      } catch (error) {
          console.error(error);
         res.status(401)
        throw new Error('Authorization failed')
      }
    }
    if (!token) {
        res.status(401)
        throw new Error('token not found')

    }
    next()
   
})
export {protect}