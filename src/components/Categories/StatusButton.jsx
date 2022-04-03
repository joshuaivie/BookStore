import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function StatusButton() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  return (
    <div>
      <p>{status}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
}

export default StatusButton;
