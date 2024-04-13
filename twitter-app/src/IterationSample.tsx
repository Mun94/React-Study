import React, { useState } from "react";

const IterationSample = () => {
  const [ names, setNames ] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
  ]);

  const onClick = () => {
    const nextNames = names.filter(name => name.text !== "눈사람");
    setNames(nextNames);
  }

  const nameList = names.map((name, index) =>
    <div key={name.id}> {name.text}, idx: {index} <input type="text" /> </div>
  )
  return (
    <>
      <button onClick={onClick}>제거</button>
      <ul>{nameList}</ul>
    </>
  )
}

export default IterationSample;