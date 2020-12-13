import React from 'react';

export function List({ array = [], title = '', isbn = '', author = '' }) {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <ul>
        {(array || [])
          .filter(
            (item) => item.isbn.includes(isbn) && item.authors.includes(author)
          )
          .map((item) => (
            <li key={item.isbn}>
              {item.title || item['\ufefftitle']}{' '}
              <ul>
                <small>{item.authors.replace(',', ' & ')}</small>
                <br />
                <small>{item.isbn}</small>
              </ul>
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
}
