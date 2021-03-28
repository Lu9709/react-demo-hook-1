function ajax(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([
        {id:"1",name:"John"},
        {id:"2",name:"Tom"},
        {id:"3",name:"Jim"},
        {id:"4",name:'lu'}
      ])
    },1000)
  })
}
export default ajax