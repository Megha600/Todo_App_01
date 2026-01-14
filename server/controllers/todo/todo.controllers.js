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