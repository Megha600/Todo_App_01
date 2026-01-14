import SubTodo from "../../models/subTodo.js";


//add subtodo
export const addSubTodo = async (req, res) => {
    try {
        const {title, description} = req.body

        if(!title) {
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