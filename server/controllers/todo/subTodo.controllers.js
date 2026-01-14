import SubTodo from "../../models/subTodo.js";

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