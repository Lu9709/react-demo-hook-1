import React from 'react';
import ReactDOM from 'react-dom';

import useList from "./useList"

function App() {
  const {list, deleteIndex} = useList(null)
  return (
    <div>
      <h1>List</h1>
      {list ?
        <ol>
          {list.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => {
                deleteIndex(index)
              }}>delete
              </button>
            </li>
          ))
          }
        </ol>
        : "load"}
    </div>
  )
}

ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);