import { useContext } from "react"
import { TodoContext } from "./TodoContext"


export const UseTodos = () => {
    const context = useContext(TodoContext);

    if(!context){
        throw new Error('UseTodo must be add within a component')
    }

    return context
}