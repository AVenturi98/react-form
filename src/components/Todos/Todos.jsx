import { useState } from "react";

const todosItems = ['Fare la spesa', 'Pulire la casa', 'Fare il bucato']

export default function todosList() {

    const [todos, setTodos] = useState(todosItems)
    const [newTodo, setnewTodo] = useState('')

    function onTextChange(e) {
        // console.log(e.target.value)
        setnewTodo(e.target.value)
    }

    function addTodo(e) {
        e.preventDefault()

        setTodos([...todosItems, newTodo]) //creao nuovo array settato in todos
        setnewTodo('') //resetto il form
    }

    function deleteTodo(todoText) {

        setTodos(todos.filter(todo => todo !== todoText))
    }


    return (
        <>
            <form onSubmit={addTodo} action="">
                <input onChange={onTextChange} type="text" placeholder="Devo fare" value={newTodo} />
                <input type="button" value="Add" />
            </form>
            <ul>
                {todos.map((todo) =>
                    <li key={todo}>
                        <span>{todo}</span>
                        <button onClick={() => deleteTodo(todo)}>Delete</button>
                    </li>
                )}
            </ul>
        </>
    )
}