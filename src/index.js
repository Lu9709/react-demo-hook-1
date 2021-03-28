import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  const buttonRef = React.useRef(null);
  return (
    <div className="App">
      <Button ref={buttonRef}>按钮</Button>
    </div>
  );
}
// const Button3 = React.forwardRef((props, ref) => {
//   console.log(props);
//   console.log(ref)
//   return <button className="red" ref={ref} {...props} />;
//
// });
const Button = React.forwardRef((props,ref)=>{
  return <button className='red' ref={ref} {...props}/>
})
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);