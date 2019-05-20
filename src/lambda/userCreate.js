
import mongoose from 'mongoose'

import db from './server'

import User from './schemas/user';

exports.handler = async (event, context) => {
  
    context.callbackWaitsForEmptyEventLoop = false

    try {
        const data = JSON.parse(event.body)

        const id = mongoose.Types.ObjectId()
        const email = data.email;
        const password = data.password;

        const user = {
            _id: id,
            email,
            password
        }
        
        const response = {
            msg: "User successfully created",
            data: user
        }

    
        await User.create(user)
        return {
            statusCode: 201,
            body: JSON.stringify(response)
        }

    } catch (err) {
        console.log('user.create', err) // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({msg: err.message})
        }
    }
}