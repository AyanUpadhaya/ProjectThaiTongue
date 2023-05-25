import React from 'react';
const Quotes = () => {
  return (
    <div className="container-fluid mt-2 p-5  bg-secondary">
        <h2 className='display-2 text-white text-center mb-3'>Get Weekly Recipes</h2>
        <div className="container d-flex py-5">
          <input type="email" className="form-control" placeholder='Enter your email' id="email" aria-describedby="emailHelp" />
          <button type="submit" className="btn btn-cs-primary">Submit</button>
        </div>
    </div>
  );
};

export default Quotes;
