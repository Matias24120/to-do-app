import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleError('');
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionError('');
  };

  const handleClearTitle = () => {
    setTitle('');
    setTitleError('');
  };

  const handleClearDescription = () => {
    setDescription('');
    setDescriptionError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!title.trim()) {
      setTitleError('Please enter a title.');
      hasError = true;
    }

    if (!description.trim()) {
      setDescriptionError('Please enter a description.');
      hasError = true;
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
        <div className="flex flex-col mt-2 mr-2 flex-grow relative">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            className="border rounded py-2 px-3 w-full"
          />
          {title && (
            <button
              type="button"
              onClick={handleClearTitle}
              className="bg-red-400 hover:bg-red-500 text-white rounded-full absolute top-2.5 right-2 flex items-center justify-center"
              style={{ border: 'none', outline: 'none', width: '1.4rem', height: '1.4rem' }}
            >
              <i className="material-icons text-lg">clear</i>
          </button>
          )}
          {titleError && <p className="text-red-500 mt-1 text-lg">{titleError}</p>}
        </div>
        <div className="flex flex-col mt-2 mr-2 flex-grow relative">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            className="border rounded py-2 px-3 w-full"
          />
          {description && (
            <button
            type="button"
            onClick={handleClearDescription}
            className="bg-red-400 hover:bg-red-500 text-white rounded-full absolute top-2.5 right-2 flex items-center justify-center"
            style={{ border: 'none', outline: 'none', width: '1.4rem', height: '1.4rem' }}
          >
            <i className="material-icons text-lg">clear</i>
          </button>
          )}
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
