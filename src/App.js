import React, {useState, useEffect} from 'react';
import DataTable from './DataTable/DataTable';
require('es6-promise').polyfill();
require('isomorphic-fetch');

function App() {

  const [data, setData] = useState([]);
  const[q, setQ] = useState("");

  useEffect(() => {
    fetch("https://devmentor.live/api/examples/contacts?api_key=e1b8c22f")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <div>1</div>
      <div><DataTable data={data}/></div>
    </div>
  );
}

export default App;
