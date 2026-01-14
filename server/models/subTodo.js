import mongoose, {Schema} from 'mongoose'

const subTodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    markascomplete: {
        type: Boolean,
        default: false
    }
})

const SubTodo = mongoose.model("SubTodo", subTodoSchema)
export default SubTodo; 