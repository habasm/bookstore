import React from 'react';

const Form = () => (
  <div className="formBox">
    <form>
      <input className="titleInput" type="text" placeholder="Title" />
      <input className="Author" type="text" placeholder="Put the author here" />
      <button type="button" className="formButton">
        Add Book
      </button>
    </form>
  </div>
);

export default Form;
