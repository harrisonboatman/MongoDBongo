const { ObjectID, ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 50
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (createdAtVal) => dateFormat(createdAtVal)

        },
        
            username: {
                type :String,
                required: true
            },
        
        reactions: [reactionSchema],

        
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id:false
    }
);

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (createdAt) => dateFormat(createdAt)
        }
    }
)



const Thought = model('Thought', thoughtSchema);


thoughtSchema.virtuals('reactionCount').get(function () {
    return this.reactions.length
})


module.exports = Thought