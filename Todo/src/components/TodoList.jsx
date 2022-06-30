import React from 'react'

const TodoList = ({todo, onDelete}) => {
    return (
        <div>
            <div className='input-data' key={todo.id}>
                {todo.text}
                <button className='delete' onClick={() => onDelete(todo.id)}> ✘ </button>
            </div>
        </div>
    )
}

export default TodoList;