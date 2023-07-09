"use client"

import Info from "@app/components/Info";
import { useEffect, useState } from "react";


const page = () => {
    const [books, setBooks] = useState([]);


    const fetchBook = async () => {
        const response = await fetch("/api/book");
        const data = await response.json();
        setBooks(data)
    }

    useEffect(() => {
        fetchBook()
    }, [])


    const handleDelete = async (book) => {
        console.log('delete clicked ', book)
        const confirmed = confirm("Are you sure to delete this data?")
        if (confirmed) {
            try {
                await fetch(`/api/book/${book._id.toString()}`, {
                    method: "DELETE",
                });

                const filterBooks = books.filter((item) => item._id != book._id)
                setBooks(filterBooks)

            }
            catch (error) {
                console.log(error)
            }
        }
    }
    const handleUpdate = async (book, newBookName) => {
        console.log('update');
        try {
            const response = await fetch(`/api/book/${book._id}`, {
                method: "PATCH",
                body: JSON.stringify(
                    {
                        bookName: newBookName,
                        bookTopic: 'changed'
                    }
                )
            });
            console.log('response ', response)
            if (response.ok) {
                console.log('response2 ', response)
                alert('update successfully');
                fetchBook();

            }


        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            {books.length}
            {

                books.map(book => <Info key={book._id} book={book} handleDelete={handleDelete} handleUpdate={handleUpdate}></Info>)




            }
        </div>
    );
};

export default page;