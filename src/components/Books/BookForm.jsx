import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/books';

function BookForm({ categories }) {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({});

  const resetForm = () => {
    setFormState({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.title && formState.author) {
      const finalFormState = { ...formState };
      finalFormState.id = uuidv4();
      dispatch(postBook(finalFormState));
      resetForm(e);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const updatedFormState = { ...formState };

    updatedFormState[name] = value;
    setFormState(updatedFormState);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Book</h2>
      <form className="flex flex-wrap" onSubmit={handleSubmit}>

        <input className="form-title" type="text" name="title" placeholder="Book Title" onChange={handleChange} required />

        <input className="form-author" type="text" name="author" placeholder="Book Author" onChange={handleChange} required />
        <div className="form-book-category">
          <select className="select" name="category" value={formState.category} onChange={handleChange} id="select-category">
            <option value="...">...</option>
            {categories?.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button className="add-btn flex" type="submit">Add Book</button>

      </form>
    </div>
  );
}

export default BookForm;
BookForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
