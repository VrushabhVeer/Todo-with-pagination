import React from 'react'

const AddTodos = ({saveInfo, setNewTodo, }) => {
    return (
        <div>
            <div className='input'>
                <input onChange={({ target }) => setNewTodo(target.value)} placeholder='Add Tasks...' />

                <button onClick={saveInfo}> + </button>
            </div>
        </div>
    )
}

export default AddTodos;