import React from 'react';
import DeleteBtn from './DeleteBtn';

const OneContact = ({ pictureUrl, name, popularity, deleteContact }) => {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="Contact pic" width="100" height="auto" />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <DeleteBtn deleteContactFnc={deleteContact} />
    </tr>
  );
};

export default OneContact;
