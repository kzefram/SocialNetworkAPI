const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8    
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }
    ],
    likes: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
    }
    );

    export const User = mongoose.model('User', userSchema);