import ajax from "./ajax"
import {useState,useEffect} from 'react'
function useList() {
  const [list, setList] = useState(null)
  useEffect(() => {
    ajax("/list").then(list => {
      setList(list);
    })
  }, [])
  return {
    list:list,
    deleteIndex: index => {
      setList(list.slice(0, index).concat(list.slice(index+1)))
    }
  }
}
export default useList