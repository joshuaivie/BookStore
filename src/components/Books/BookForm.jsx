import React from 'react';
import PropTypes from 'prop-types';

function BookForm({ categories }) {
  return (
    <div>
      <div className="section-title">Add New Book</div>
      <form action="" method="post">
        <ul>
          <li>
            <input type="text" placeholder="Book Title" required />
          </li>
          <li>
            <select name="categories" id="select-category">
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
