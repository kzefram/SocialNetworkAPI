const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Number,
        default: 0,
    }
});

const Thought = mongoose.model('Thought', thoughtSchema);