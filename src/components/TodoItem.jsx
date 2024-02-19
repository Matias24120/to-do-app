import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  const handleCompleteTodo = () => {
    const date = new Date().toLocaleString();
    completeTodo(todo.id, date);
  };

  return (
    <li className="flex items-center justify-between">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ flex: '1', wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word'}}>
          <p><strong className="text-green-500 text-xl">{todo.title}</strong></p>
          <p className='mt-1 mb-1'>{todo.description}</p>
          {todo.completed && <p className="text-gray-400 text-sm">Completed on: {todo.completedOn}</p>}
        </div>
        <div>
          {!todo.completed && (
            <button onClick={handleCompleteTodo} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-3 mr-2">
              <FontAwesomeIcon icon={faCheck} />
            </button>
          )}
          <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;