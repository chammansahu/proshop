import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
  
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
 }
  else {
    //authentication error
    res.status(401)
    throw new Error('Invalid Email or PassWord');
 }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email })
  //already in db through error
  if (userExist) {
    //bad request
    res.status(400)
    throw new Error('User already exist')
  }
  //else create new
  const user = await User.create({
    name,email,password
  })
  //everything goes ok
  if (user) {
    //201 something is created
       res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
         token: generateToken(user._id),
       });
  }
  else {
    res.status(400)
    throw new Error('invalid user data')
  }
})
// @desc    get  user profile
// @route   POST /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async (req, res) => {
  //find user from req object after protected return it
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
      
    });
  }
  else {
    res.status(404)
    throw new Error("User not Found")
  }
   
})

export {authUser,getUserProfile,registerUser}