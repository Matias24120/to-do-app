import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo, completeTodo }) => {
  return (
    <div>
      <div>
        {todos
          .filter(todo => !todo.completed)
          .map((todo, index) => (
            <div key={`${todo.id}-${index}`} className="bg-gray-800 rounded-lg p-4 pt-2 pb-2 mb-4">
              <TodoItem todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
            </div>
          ))}
      </div>
      <div>
        {todos
          .filter(todo => todo.completed)
          .map((todo, index) => (
            <div key={`${todo.id}-${index}`} className="bg-gray-800 rounded-lg p-4 pt-2 pb-2 mb-4">
              <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;