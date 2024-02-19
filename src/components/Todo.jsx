import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAddTaskMessage, setShowAddTaskMessage] = useState(false);
  const [showCompletedTaskMessage, setShowCompletedTaskMessage] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    setShowAddTaskMessage(!showCompleted && todos.filter(todo => !todo.completed).length === 0);
    setShowCompletedTaskMessage(showCompleted && todos.filter(todo => todo.completed).length === 0);
  }, [showCompleted, todos]);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now() };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setShowAddTaskMessage(false);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const completeTodo = (id, completedOn) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true, completedOn: completedOn } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };  

  return (
    <div className="bg-gray-900 min-h-screen py-4 px-4 text-white">
      <div className="max-w-3xl mx-auto flex justify-between items-center tasks-container">
        <h1 className="text-5xl font-bold mb-4">Tasks</h1>
        <div>
          <button onClick={() => setShowCompleted(false)} className={`${showCompleted ? 'bg-gray-700 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-700'} text-white font-bold py-2 px-8 rounded-xl rounded-r-none`}>
            To Do
          </button>
          <button onClick={() => setShowCompleted(true)} className={`${showCompleted ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-700 hover:bg-gray-600'} text-white font-bold py-2 px-4 rounded-xl rounded-l-none`}>
            Completed
          </button>
        </div>
      </div>
      <div style={{ height: "440px", overflowY: "auto", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }} className={`max-w-3xl mx-auto bg-gray-700 p-4 rounded-xl`}>
        {!showCompleted && <TodoForm addTodo={addTodo} />}
        {showAddTaskMessage && <p className="text-white text-center text-lg">No tasks to do.</p>}
        <TodoList todos={todos.filter(todo => !showCompleted ? !todo.completed : todo.completed)} toggleTodo={toggleTodo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        {showCompletedTaskMessage && <p className="text-white text-center text-lg">No completed tasks.</p>}
      </div>
    </div>
  );
};

export default Todo;