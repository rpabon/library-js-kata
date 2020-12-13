import Axios from 'axios';
import { useEffect, useState } from 'react';

// eslint-disable-next-line
import 'regenerator-runtime';

async function fetchInfo(setCsv = () => {}) {
  try {
    const { data } = await Axios.get('http://localhost:3000');
    setCsv(data);
  }
  catch (error) {
    console.error(error);
  }
}

export function useCSV() {
  const [csv, setCsv] = useState({
    authors: [],
    books: [],
    magazines: [],
  });

  useEffect(() => void fetchInfo(setCsv), []);

  return csv;
}
