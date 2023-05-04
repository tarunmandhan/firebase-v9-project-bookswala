import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

const HomePage = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, [firebase]);

  return (
    <>
      <div className="container">
        {books.map((book) => (
          <li>{book.data().name}</li>
        ))}
      </div>
    </>
  );
};

export default HomePage;
