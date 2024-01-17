import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../../assets/Input/Input';
import Button from '../../assets/Button.jsx/Button';
import DropdownComponent from '../../assets/DropDown/Dropdown';
import "./td.css"

const Td = () => {
    const [regid, setRegid] = useState('');
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const handleChange = (event) => {
        setRegid(event.target.value);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`/td-${regid}`);
            setData(response.data);
            console.log('Response from backend:', response.data);
        } catch (error) {
            console.error('Error sending request:', error);
        }
    };

    const handleClick = async () => {
        fetchData();
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`/td-${regid}`, formData);
            console.log('Response from backend:', response.data);
            fetchData(); // Fetch data after successful post
        } catch (error) {
            console.error('Error sending request:', error);
        }
    };

    const handleDelete = async (regid, recid) => {
        try {
            const response = await axios.delete(`/td-${regid}-${recid}`);
            console.log('Delete response:', response.data);
            fetchData(); // Fetch data after successful delete
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const [isAddFormVisible, setAddFormVisible] = useState(false);

    const handleToggle = () => {
        setAddFormVisible((prevValue) => !prevValue);
    };

    useEffect(() => {
        // Fetch initial data when regid changes
        fetchData();
    }, [regid]);

    return (
        <div className="td">
            <div className="inp">
                <Input placeholder="Enter RegID" value={regid} onChange={handleChange} />
                <Button onClick={handleClick} />
            </div>
            <div className="dropdown">
                <div className="dropdown-list">
                    {data.length > 0 && <DropdownComponent data={data} handleDelete={handleDelete} />}
                </div>
                <div className="addBtn">
                    <button onClick={handleToggle} className='add_butn'>
                        <img className='add_img' src="./icons8-add-button-32.png" alt="" />
                    </button>
                </div>
                {isAddFormVisible && (
                    <div className="form">
                        Add 
                        <Input placeholder="Title" name="title" value={formData.title} onChange={handleFormChange} />
                        <Input placeholder="Content" name="content" value={formData.content} onChange={handleFormChange} />
                        <Button onClick={handleSubmit} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Td;
