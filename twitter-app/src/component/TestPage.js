import { useContext } from 'react';
import { StyleContext } from './CreateContext'

const TestPage = () => {
  const {
    width,
    height,
    bgColor
  } = useContext(StyleContext);

  return (
    <div
      style={{
        width,
        height,
        background: bgColor
      }}
    />
  )
}

export default TestPage;