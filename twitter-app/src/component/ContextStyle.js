import { createContext, useState } from 'react';
import TestPage from './TestPage.js'

const defaultStyle = {
  width: '20px',
  height: '20px',
  bgColor: 'red',
}

export const StyleContext = createContext(defaultStyle);

const CreateContext = () => {
  const [ randomColor, setRandomColor ] = useState(defaultStyle.bgColor);

  const onClick = () => {
    const idx = Math.ceil(Math.random() * 10) % 3;

    setRandomColor(['blue', 'pink', 'yellow'][idx]);
  }

  return (
    <>
      <StyleContext.Provider value={{
        ...defaultStyle,
        bgColor: randomColor
      }}
      >
        <TestPage/>
      </StyleContext.Provider>
      <button onClick={onClick}>랜덤 색상</button>
    </>
  )
}

export default CreateContext;