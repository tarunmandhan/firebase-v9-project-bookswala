import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/Firebase";

const BookCard = (props) => {
  const firebase = useFirebase();
  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then(() => setURL(url));
  }, []);

  return (
    <>
      <Card className="mt-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            This book has a title {props.name} and this book is sold by
            {props.displayName} and this cost Rs. {props.price}.
          </Card.Text>
          
          <Button variant="primary">Buy Book</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookCard;
