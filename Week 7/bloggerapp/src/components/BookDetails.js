import React from 'react';

// Data for the books
const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

function BookDetails() {
  return (
    <div>
      <h1>Book Details</h1>
      {/* Map through the books array and display each one */}
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;