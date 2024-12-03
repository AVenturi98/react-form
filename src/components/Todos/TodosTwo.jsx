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

    return (
        <>
            <form onSubmit={addTodo} action="">
                <input onChange={onTextChange} type="text" placeholder="Titolo" value={newTodo} />
                <input type="text" placeholder="Data di scita" />
                <button type="sumbit">Aggiungi</button>
            </form>
        </>
    )
}