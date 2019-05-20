
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        email: {
            type: String,
            required: [true, 'Email field is required'],
            max: 100
        },
        password: {
            type: String,
            required: [true, 'Password field is required']
        }
    })

const User = mongoose.model('user', schema)

export default User