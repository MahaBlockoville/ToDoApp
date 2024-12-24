import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import './App.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filterTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo addTask={addTask} />
      <Filter setFilter={setFilter} />
      <TodoList
        tasks={filterTasks()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoApp;
