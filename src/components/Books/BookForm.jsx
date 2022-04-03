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
    <div>
      <div className="section-title">Add New Book</div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input type="text" name="title" placeholder="Book Title" onChange={handleChange} required />
          </li>
          <li>
            <input type="text" name="author" placeholder="Book Author" onChange={handleChange} required />
          </li>
          <li>
            <select name="category" value={formState.category} onChange={handleChange} id="select-category">
              <option value="...">...</option>
              {categories?.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </li>
          <li>
            <button type="submit">Add Book</button>
          </li>
        </ul>
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
