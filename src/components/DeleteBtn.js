import React from 'react';

const DeleteBtn = (props) => {
  return (
    <td>
      <button onClick={props.deleteContactFnc}>Delete</button>
    </td>
  );
};

export default DeleteBtn;
