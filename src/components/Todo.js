import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../redux/todo'

function Todo() {
    const [input, setInput] = useState('')

    const count = useSelector((state) => state.todo.count)
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type='text'
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                />
                <button type='submit'>+</button>
            </form>
            <div className='Todos'>
                {count > 0 &&
                    todos.map((todo) => (
                        <div>
                            <span key={todo.id}>{todo.text}</span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                            >
                                X
                            </button>
                        </div>
                    ))}
                {count === 0 && <div>No Todos</div>}
            </div>
        </>
    )
}

export default Todo
