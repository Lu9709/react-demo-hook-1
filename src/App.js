import {useState,useEffect} from "react"

function App() {
  const [n, setN] = useState(0);
  const onClick = () => {
    setN(n + 1);
  }
  useEffect(()=>{
    console.log('use effect')
  },[])
  return (
    <>
      {n}
      <button onClick={onClick}>+1</button>
    </>)
}

export default App;
