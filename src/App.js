import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import DataTable from './DataTable/DataTable';
require('es6-promise').polyfill();
require('isomorphic-fetch');

function App() {

  const [data, setData] = useState([]);
  const[q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["firstName", "lastName"]);

  useEffect(() => {
    fetch("https://devmentor.live/api/examples/contacts?api_key=e1b8c22f")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);

  return (
    <div style={{margin:15}}>
      <div >
      <TextField  size="small" fullWidth id="outlined-basic" label="Search..." variant="outlined" value={q} onChange={(e)=>{
          setQ(e.target.value)
        }} />

        <br/>
        {columns &&
          columns.map((column) => (
            <label>
              <Checkbox
              color="primary"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <br/>
      <div><DataTable data={search(data)}/></div>
    </div>
  );
}

export default App;
