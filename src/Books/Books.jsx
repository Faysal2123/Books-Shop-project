import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    }
    
    ,[])
    return (
        <div className="md:mb-12 mb-6">
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-6">
                {
                    books.map(book =><Book key={book.id}  book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;