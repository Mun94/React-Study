import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";

// 자식 컴포넌트
const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [ inputVal, setInputVal ] = useState('');

  const onChange = (e) => {
    setInputVal(e.target.value);
  }

  useImperativeHandle(ref, () => ({
    testFunc: () => {
      console.log('test function');
    },
    inputDom: inputRef.current,
  }));

  return (
    <input
      placeholder='입력하세요'
      value={inputVal}
      type="text"
      ref={inputRef}
      onChange={onChange}
    />
  )
});

// 부모 컴포넌트
const Field = () => {
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.testFunc();
    ref.current.inputDom.focus();
  }

  return (
    <>
      <Input ref={ref} />
      <button onClick={handleFocus}>입력란 포커스</button>
    </>
  );
}

export default Field;

// import React, { useRef, useState, forwardRef } from "react";
//
// const Input = forwardRef( (props, ref ) => {
//   const [ inputVal, setInputVal ] = useState('');
//
//   const onChange = (e) => {
//     setInputVal(e.target.value);
//   }
//
//   return (
//     <input
//       placeholder='입력하세요'
//       value={inputVal}
//       type="text"
//       ref={ref}
//       onChange={onChange}
//     />
//   )
// });
//
// const Field = () => {
//   const ref = useRef(null);
//
//   const handleFocus = () => {
//     ref.current.focus();
//   }
//
//   return (
//     <>
//       <Input ref={ref} />
//       <button onClick={handleFocus}>입력란 포커스</button>
//     </>
//   );
// }
//
// export default Field;