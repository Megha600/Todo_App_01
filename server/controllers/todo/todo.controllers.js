import Todo from "../../models/todo.js"


//add todo
export const addTodo = async (req, res) => {
    try {
        const { title } = req.body

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            })
        }

        const newTodo = new Todo({
            title
        })

        await newTodo.save()
        console.log("Saved Todo:", newTodo);

        res.status(200).json({
            success: true,
            message: "Todo Created successfully",
            data: newTodo
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
}

//get all todo
export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 })

        res.status(201).json({
            success: true,
            message: "Fetched all todos",
            data: todos
        })
    } catch (error) {
        console.log("Fetching Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch todos",
        });
    }
}

//update todo
export const editTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, markascomplete } = req.body

        if (!title) {
            res.status(400).json({
                success: false,
                message: "Title is required"
            })
        }

        const editedTodo = await Todo.findByIdAndUpdate(id, {
            ...(title && { title }),
            ...(markascomplete !== undefined && { markascomplete }),
        }, { new: true })

        if (!editedTodo) {
            res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Todo updated successfully"
        })


    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            success: false,
            message: "Failed to update todo"
        })
    }


}

//delete todo
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params

        const deletedTodo = await Todo.findByIdAndDelete(id)

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
            data: deletedTodo,
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete todo"
        })
    }
}

//markascomplete toggle
export const toggleCompleteTodo = async (req, res) => {
    try {
        const { id } = req.params

        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        await todo.save();

        res.status(200).json({
            success: true,
            message: "Todo completion status toggled",
            data: todo,
        });


    } catch (error) {
        console.log("Mark as complete failed", error);
        res.status(500).json({
            success: false,
            message: "Mark as complete failed"
        })
    }
}