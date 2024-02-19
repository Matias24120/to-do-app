import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!title.trim()) {
      setTitleError('Please enter a title.');
      hasError = true;
    } else {
      setTitleError('');
    }

    if (!description.trim()) {
      setDescriptionError('Please enter a description.');
      hasError = true;
    } else {
      setDescriptionError('');
    }

    if (hasError) {
      return;
    }

    addTodo({
      title,
      description,
      completed: false
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="flex text-black">
        <div className="flex flex-col mt-2 mr-2 flex-grow">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded py-2 px-3 w-full"
          />
          {titleError && <p className="text-red-500 mt-1 text-lg">{titleError}</p>}
        </div>
        <div className="flex flex-col mt-2 mr-2 flex-grow">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded py-2 px-3 w-full"
          />
          {descriptionError && <p className="text-red-500 mt-1 text-lg">{descriptionError}</p>}
        </div>
        <div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 font-bold text-white py-2 px-4 rounded mt-2 button-focus" style={{ height: "43px" }}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;