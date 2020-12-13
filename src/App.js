import React, { useState } from 'react';
import { useCSV } from './fetchInfo';
import { Input } from './Input';
import { List } from './List';

function App() {
  const { books, magazines } = useCSV();
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <>
      <Input
        label="Filter by ISBN"
        value={isbn}
        placeholder="ISBN"
        onChange={(e) => void setIsbn(e.target.value)}
      />
      <br />
      <br />
      <Input
        label="Filter by Authors"
        value={author}
        placeholder="Author"
        onChange={(e) => void setAuthor(e.target.value)}
      />
      <List title="Books" array={books} isbn={isbn} author={author} />
      <List title="Magazines" array={magazines} isbn={isbn} author={author} />
    </>
  );
}

export default App;
