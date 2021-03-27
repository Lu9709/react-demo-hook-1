import {useState} from "react"
import useUpdate from "./useUpdate"


function App() {
  const [n,setN] = useState(0)
  onclick = ()=>{
    setN(n+1)
  }
  useUpdate(()=>{
    console.log('number change')},[n]);
  return(
    <div>
      {n}
      <button onClick={onclick}>+1</button>
    </div>
  )
}
export default App;
