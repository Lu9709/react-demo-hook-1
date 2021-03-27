import {useState,useEffect} from "react"

function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const onClickN = () => {
    setN(n + 1);
  }
  const onClickM = () => {
    setM(m + 1);
  }
  useEffect(()=>{
    console.log('n和m change')
  })
  return (
    <>
      {n}
      <button onClick={onClickN}>+1</button>
      {m}
      <button onClick={onClickM}>+1</button>
    </>)
}

export default App;
