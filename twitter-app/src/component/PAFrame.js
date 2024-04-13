import { useState } from 'react'
import paStyle from '../style/PAStyle.module.scss';

const PAFrame = ({ children }) => {
  console.log('paStyle', paStyle);

  const [ isTheme, setIsTheme ] = useState(true);

  const onThemeChange = () => {
    setIsTheme(!isTheme);
  }

  return (
    <div className={`${paStyle['pa-wrapper']}`}>
      <div className={paStyle[isTheme ? 'pa-wrapper--white' : 'pa-wrapper--black']}>
        <p>PA Test</p>

        { children }
      </div>
      <button onClick={onThemeChange}>Theme</button>
    </div>
  )
}

export default PAFrame