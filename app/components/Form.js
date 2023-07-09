"use client"
import React, { useState } from 'react';


const Form = () => {
    // console.log('session: ', session?.user)
    const [bookName, setBookName] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const handleFormSubmit = async (e) => {
        e.preventDefault();


        // Perform any necessary form validation or data processing here
        // For now, let's just log the values
        console.log('Book Name:', bookName);
        console.log('Book Title:', bookTitle);
        // Reset the form fields




    }




    return (
        <div>
            <h1>hello div</h1>
        </div>
    );
};


export default Form;
