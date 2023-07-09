"use client"
import React, { useState } from 'react';

const Info = ({ book, handleDelete, handleUpdate }) => {
    const [inputText, setInputText] = useState('')

    return (
        <div>
            <p>{book.name}</p>
            <p>{book.topic}</p>

            <button className="btn " onClick={() => { handleDelete(book) }}>delete</button>

            <br></br>


            <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />

            <br />

            <button className="btn ms-3 " onClick={() => handleUpdate(book, inputText)}>Update</button>
            <br />
            <br />
            <br></br>
            <br></br>

        </div>
    );
};

export default Info;