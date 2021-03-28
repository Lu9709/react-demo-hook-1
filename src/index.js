import React from 'react';
import ReactDOM from 'react-dom';
import {useCallback,useMemo} from 'react'

function App() {
  const [n, setN] = React.useState(0);
  const [m, setM] = React.useState(0);

  const onClick = () => {
    setN(n + 1);
  };
  const onClick2 = () => {
    setM(m + 1);
  };
  const onClickChild = useCallback( ()=>{console.log(m)}
  ,[m])

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>update n {n}</button>
        <button onClick={onClick2}>update m {m}</button>
      </div>
      <Child2 data={m} onClick={onClickChild} />
      {/* Child2 居然又执行了 */}
    </div>
  );
}

function Child(props) {
  console.log("child 执行了");
  console.log("假设这里有大量代码");
  return <div onClick={props.onClick}>child: {props.data}</div>;
}

const Child2 = React.memo(Child);
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);