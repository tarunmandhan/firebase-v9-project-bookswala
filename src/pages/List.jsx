import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ListingPage = () => {
  const [name, setName] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <div className="container mt-5">
        <h1>Book Listing Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter Book Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>ISBN Number</Form.Label>
            <Form.Control
              onChange={(e) => setIsbnNumber(e.target.value)}
              value={isbnNumber}
              type="text"
              placeholder="Enter ISBN Number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              placeholder="Enter Price"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Choose File</Form.Label>
            <Form.Control
              onChange={(e) => setCoverPic(e.target.files[0])}
              value={price}
              type="file"
              placeholder="Select File"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ListingPage;