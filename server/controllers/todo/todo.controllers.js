import Todo from "../../models/todo.js"

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