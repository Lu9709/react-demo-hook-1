import {useState,useEffect} from "react"

function App() {
  const [ChildVisible, setChildVisible] = useState(true)
  const show = ()=>{
    setChildVisible(true)
  }
  const hide = ()=>{
    setChildVisible(false)
  }
  return (
    <div>
      {ChildVisible ?<button onClick={hide}>hide</button>: <button onClick={show}>show</button> }
      {ChildVisible ? <Child/> : null}
    </div>
  )
}
const Child = (props) => {
  useEffect(()=>{
    console.log('child渲染或变化了')
    return ()=>{ console.log('child消失了')}
  })
  return (<div>Child</div>)
}
export default App;
