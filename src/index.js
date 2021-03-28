import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  const [n, setN] = React.useState(0);
  const count = React.useRef(0)
  const onClick = () => {
    setN(n + 1);
  };
  React.useEffect(
    ()=>{
      count.current +=1
      console.log(count.current)
    }
  )
  return (
    <div className="App">
        <button onClick={onClick}>update n {n}</button>
    </div>
  );
}
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);