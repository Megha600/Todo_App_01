import SubTodo from "../../models/subTodo.js";
import Todo from "../../models/todo.js";


//add subtodo
export const addSubTodo = async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            })
        }

        const newSubTodo = new SubTodo({
            title,
            description
        })

        await newSubTodo.save()

        res.status(201).json({
            success: true,
            message: "SubTodo created successfully",
            data: newSubTodo
        })
    } catch (error) {
        console.log("Error:", error)
    }
}

//get all subtodos
export const getAllSubTodos = async (req, res) => {
    try {
        const subTodos = await SubTodo.find().sort({ createdAt: -1 })

        res.status(201).json({
            success: true,
            message: "all subtodos fetched successfully",
            data: subTodos
        })
    } catch (error) {
        console.log("Fetching subtodos failed");
        res.status(500).json({
            success: false,
            message: "Fetching subtodos failed"
        })
    }
}

//update todo
export const editSubTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, markascomplete } = req.body

        if (!title) {
            res.status(400).json({
                success: false,
                message: "Title is required"
            })
        }

        const editedSubTodo = await SubTodo.findByIdAndUpdate(id, {
            ...(title && { title }),
            ...(description && { description }),
            ...(markascomplete !== undefined && { markascomplete }),
        }, { new: true })

        if (!editedSubTodo) {
            res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "SubTodo edited successfully"
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            success: false,
            message: "Failed to edit subtodo"
        })
    }
}

//delete a todo
export const deleteSubTodo = async (req, res) => {
    try {
        const { id } = req.params

        const deletedTodo = await SubTodo.findByIdAndDelete(id)

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

//toggle markascomplete
export const toggleCompleteSubTodo = async (req, res) => {
    try {
        const { id } = req.params

        const todo = await SubTodo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        await todo.save();

        res.status(200).json({
            success: true,
            message: "SubTodo completion status toggled",
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