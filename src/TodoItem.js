import React from 'react';

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span
        onClick={() => toggleComplete(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
