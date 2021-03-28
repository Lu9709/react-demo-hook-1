import React from 'react';
import ReactDOM from 'react-dom';
import {createRef,useEffect,useRef,useImperativeHandle} from  'react'

function App() {
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log(buttonRef.current);
  });
  return (
    <div className="App">
      <Button2 ref={buttonRef}>按钮</Button2>
      <button
        className="close"
        onClick={() => {
          console.log(buttonRef);
          buttonRef.current.x();
        }}
      >
        x
      </button>
    </div>
  );
}

const Button2 = React.forwardRef((props, ref) => {
  const realButton = createRef(null);
  const setRef = useImperativeHandle;
  setRef(ref, () => {
    return {
      x: () => {
        realButton.current.remove();
      },
      realButton: realButton
    };
  });
  return <button ref={realButton} {...props} />;
});
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);