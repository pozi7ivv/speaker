import React from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles={
    ul: {
        listStyle: 'none'
    }
}

 function TodoList(todos){
    return(
        <ul style={styles.ul}>
            { todos.todos.map((todo,i)=>{
                return <TodoItem todo={todo} key={todo.id} i={i} onChange={todos.onToggle}/>
            })}
        </ul>
    )
}

//Валідація
TodoList.propTypes={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList
