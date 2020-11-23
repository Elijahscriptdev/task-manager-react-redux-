import React, { useState } from "react";

const TaskPage = () => {
  const [cardForm, showCardForm] = useState(false);

  const formToggler = () => {
    showCardForm(!cardForm);
  };

  return (
    <div className='container my-5'>
      <div className='jumbotron py-3'>
        <div className='row'>
          <div className='col-md-10'>
            <h2 className='display-4 text-center text-uppercase'>
              Task Manger App
            </h2>
          </div>
          <div className='col-md-2'>
            <button className='btn btn-success m-3' onClick={formToggler}>
              +
            </button>
          </div>
        </div>
        {cardForm && (
          <form>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Task Title'
              />
            </div>
            <div className='form-group'>
              <textarea
                type='text'
                className='form-control'
                placeholder='Task Description'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TaskPage;
