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
    reactions: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    createdAt: [
        {
        type: Date,
        default: Date.now,
        }
    ],
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;