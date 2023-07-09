"use client"
import React, { useState } from 'react';

const Input = () => {
    const [bookName, setBookName] = useState('');
    const [bookTopic, setBookTopic] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('book Name ', bookName)
        console.log('book topic ', bookTopic)



        try {

            const response = await fetch("/api/book/new", {
                method: "POST",
                body: JSON.stringify({ name: bookName, topic: bookTopic })
            })

            if (response.ok) {
                alert('done properly');
                setBookName('')
                setBookTopic('')



            }

        }

        catch (error) {
            console.log(error)
        }
        finally {

        }
    }
    return (
        <div>
            <h1>Book Form</h1>
            <br />

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="bookName">Book Name:</label>
                <input
                    type='text'
                    id='bookName'
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required

                ></input>
                <br />

                <label htmlFor="bookTopic">Book Topic:</label>
                <input
                    type='text'
                    id='bookTopic'
                    value={bookTopic}
                    onChange={(e) => setBookTopic(e.target.value)}
                    required

                ></input>
                <br />
                <button type="submit"> submit</button>
            </form>
        </div>
    );
};

export default Input;
