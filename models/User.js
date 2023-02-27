const { Schema, model } = require('mongoose');
const Thought = require('./Thought')

const userSchema = new Schema (
    {
        username:  {
            type: String,
            required: true,
            unique: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trimmed: true
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: Thought
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]

    },
    {
        toJSON:{
            virtuals: true
        },
        id: false
    }
);

const User = model('User', userSchema)

// userSchema.virtual('friendCount')
// .get(function () {
//     return this.friends.length
// });



module.exports = User