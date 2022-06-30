import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTodos from "./AddTodos";
import TodoList from "./TodoList";
import Pagination from "./Pagination";

const Todo = () => {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onDelete = (id) => {
        let newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    };

    const saveInfo = () => {
        fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                text: newTodo,
                isCompleted: false,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos([...todos, data]);
                setNewTodo("");
            });
    };

    useEffect(() => {
        const getTodo = async () => {
            let res = await axios.get(
                `http://localhost:8080/todos?_page=${page}&_limit=7`
            );
            setTodos(res.data);
            console.log(res);
            setTotalPage(Number(res.headers["x-total-count"]));
        };
        getTodo();
    }, [page]);

    return (
        <div>
            <AddTodos saveInfo={saveInfo} setNewTodo={setNewTodo} />
            <div className="input-div">
                {todos.map((todo) => (
                    <TodoList todo={todo} onDelete={onDelete} />
                ))}

                <Pagination page={page} totalPage={totalPage} setPage={setPage} />
            </div>
        </div>
    );
};

export default Todo;
