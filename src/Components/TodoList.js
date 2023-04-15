import React, { useState } from "react";

function TodoList() {

    const [data, setData] = useState();
    const [todo, setTodo] = useState([]);

    function handleChange() {
        if (todo !== '' && data !== '') {
            setTodo([...todo, data]);
            setData('')
        }
    }

    return (
        <div>
            <input onChange={(e) => setData(e.target.value)} value={data} type="text" placeholder="TODO" />
            <button onClick={handleChange}>ADD</button>
            <div>
                <ol>
                    {todo.map   (todokadata =>
                        <li>{todokadata}</li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default TodoList;