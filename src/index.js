import React from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext(null);

function App() {
  const [n, setN] = React.useState(0)
  return (
    <div>
      <ThemeContext.Provider value={{n,setN}}>
        <p>{n} </p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </ThemeContext.Provider>
    </div>
  )
}
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);