// DropdownComponent.jsx

import React, { useState } from 'react';
import './dropdown.css';

const DropdownComponent = (props) => {
  const { data, handleDelete } = props;

  const Dropdown = ({ title, content, index, regid, recid }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <div className='drpdwn'>
          <span className='serial-no'>{index + 1}.</span>
          {title}
          <button className='del_btn' onClick={() => handleDelete(regid, recid)}>
            <img  className='del_img' src="./icons8-delete-button-24.png" alt="" />
          </button>
        </div>
        <div className='slide'>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='dropdown-list'>
      {data.map((item, index) => (
        <Dropdown
          key={index}
          title={item.title}
          content={item.content}
          index={index}
          regid={item.regid}
          recid={item.recid}
        />
      ))}
    </div>
  );
};

export default DropdownComponent;
