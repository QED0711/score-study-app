
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        title: {
            type: String,
            required: [true, 'Title field is required'],
        },
        links: {
            type: [String],
            required: [true, 'Links field is required']
        },
        date: {
            type: String,
        },
        genreTags: {
            type: [String],
        }
    })

const Work = mongoose.model('work', schema)

export default Work