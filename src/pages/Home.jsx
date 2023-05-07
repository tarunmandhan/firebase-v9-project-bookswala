import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";

const HomePage = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, [firebase]);

  return (
    <>
      <div className="container mt-5">
        {books.map((book) => (
          <BookCard key={book.id} {...book.data()} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
