import mongoose, {Schema} from 'mongoose'

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    markascomplete: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo", todoSchema)
export default Todo;