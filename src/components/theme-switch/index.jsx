import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import * as Storage from '../../utils/storage'
import { THEME } from '../../constants'

import './index.scss'

const MoonIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_48_8)">
        <path
          d="M20.6047 12C20.6047 14.2821 19.6981 16.4707 18.0844 18.0844C16.4707 19.6981 14.2821 20.6047 12 20.6047V22C17.5228 22 22 17.5228 22 12H20.6047ZM12 20.6047C9.7179 20.6047 7.52928 19.6981 5.91559 18.0844C4.30191 16.4707 3.39535 14.2821 3.39535 12H2C2 17.5228 6.47721 22 12 22V20.6047ZM3.39535 12C3.39535 9.7179 4.30191 7.52928 5.91559 5.91559C7.52928 4.30191 9.7179 3.39535 12 3.39535V2C6.47721 2 2 6.47721 2 12H3.39535ZM15.2558 14.093C13.8372 14.093 12.4767 13.5295 11.4736 12.5264C10.4705 11.5233 9.90698 10.1628 9.90698 8.74419H8.51163C8.51163 10.5329 9.22217 12.2483 10.487 13.513C11.7517 14.7778 13.4671 15.4884 15.2558 15.4884V14.093ZM19.8372 11.506C19.3612 12.2955 18.6893 12.9485 17.8866 13.4018C17.0839 13.855 16.1777 14.0932 15.2558 14.093V15.4884C16.418 15.4887 17.5606 15.1887 18.5728 14.6174C19.5849 14.0462 20.4322 13.2231 21.0326 12.2279L19.8372 11.506ZM9.90698 8.74419C9.90685 7.82235 10.145 6.91613 10.5982 6.11342C11.0515 5.31072 11.7045 4.63878 12.494 4.16279L11.7721 2.96837C10.7771 3.56864 9.95403 4.41582 9.38278 5.42778C8.81153 6.43973 8.51144 7.58213 8.51163 8.74419H9.90698ZM12 3.39535C11.9533 3.39445 11.9071 3.38429 11.8644 3.36544C11.8216 3.3466 11.7829 3.31946 11.7507 3.28558C11.7115 3.24619 11.6849 3.19598 11.6744 3.1414C11.6707 3.11256 11.6726 3.02884 11.7721 2.96837L12.494 4.16279C12.9619 3.88 13.1126 3.36186 13.0577 2.95442C13 2.53116 12.667 2 12 2V3.39535ZM21.0326 12.2279C20.9712 12.3274 20.8874 12.3293 20.8586 12.3256C20.804 12.3151 20.7538 12.2885 20.7144 12.2493C20.6805 12.2171 20.6534 12.1784 20.6346 12.1356C20.6157 12.0929 20.6056 12.0467 20.6047 12H22C22 11.333 21.4688 11 21.0456 10.9423C20.6381 10.8874 20.12 11.0381 19.8372 11.506L21.0326 12.2279Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_8">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const SunIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_48_4)">
        <path
          d="M12 17.4C14.9823 17.4 17.4 14.9823 17.4 12C17.4 9.01764 14.9823 6.59998 12 6.59998C9.01767 6.59998 6.60001 9.01764 6.60001 12C6.60001 14.9823 9.01767 17.4 12 17.4Z"
          stroke="black"
          stroke-width="1.5"
        />
        <path
          d="M12 3V3.9M12 20.1V21M21 12H20.1M3.9 12H3M18.363 5.637L18.0102 5.9907M5.9898 18.0102L5.6361 18.3639M18.363 18.363L18.0102 18.0093M5.9898 5.9898L5.6361 5.6361"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_4">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = checked => {
    const theme = getTheme(checked)

    Storage.setTheme(checked)
    setChecked(checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK))

    handleChange(checked)
  }, [])

  return (
    <div className="switch-container">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          checkedIcon={
            <div className="icon checkedIcon">
              <MoonIcon />
            </div>
          }
          uncheckedIcon={
            <div className="icon uncheckedIcon">
              <SunIcon />
            </div>
          }
          offColor={'#d9dfe2'}
          offHandleColor={'#fff'}
          onColor={'#999'}
          onHandleColor={'#282c35'}
        />
      </label>
    </div>
  )
}
