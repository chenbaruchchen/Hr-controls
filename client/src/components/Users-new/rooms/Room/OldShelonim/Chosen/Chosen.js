import Tash from './Tash'




import React from 'react'

import PropTypes from 'prop-types'

import './chosen.css'

const Chosen = (props) => {
  return (
    <div className="chosen-chosen">

{props.chosen.meta.type==='tash'&&<Tash chosen={props.chosen}/>}

      <div className="chosen-header">
        <div className="icon-btn">
          <svg viewBox="0 0 877.7142857142857 1024" className="chosen-icon">
            <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM133.143 438.857v61.143h40l93.714 377.714h90.857l73.143-277.143c2.857-8.571 4.571-17.143 5.714-26.286 0.571-4.571 1.143-9.143 1.143-13.714h2.286l1.714 13.714c1.714 8 2.286 17.143 5.143 26.286l73.143 277.143h90.857l93.714-377.714h40v-61.143h-171.429v61.143h51.429l-56.571 250.286c-2.286 9.143-3.429 18.857-4 26.286l-1.143 12h-2.286c0-3.429-1.143-8-1.714-12-1.714-7.429-2.857-17.143-5.143-26.286l-82.286-311.429h-65.143l-82.286 311.429c-2.286 9.143-2.857 18.857-4.571 26.286l-2.286 12h-2.286l-1.143-12c-0.571-7.429-1.714-17.143-4-26.286l-56.571-250.286h51.429v-61.143h-171.429z"></path>
          </svg>
          <span>
            <span>יצוא למסמך</span>
          </span>
        </div>
        <div className="chosen-excel icon-btn">
          <svg viewBox="0 0 877.7142857142857 1024" className="chosen-icon2">
            <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM245.143 817.143v60.571h160.571v-60.571h-42.857l58.857-92c6.857-10.857 10.286-19.429 12-19.429h1.143c0.571 2.286 1.714 4 2.857 5.714 2.286 4.571 5.714 8 9.714 13.714l61.143 92h-43.429v60.571h166.286v-60.571h-38.857l-109.714-156 111.429-161.143h38.286v-61.143h-159.429v61.143h42.286l-58.857 90.857c-6.857 10.857-12 19.429-12 18.857h-1.143c-0.571-2.286-1.714-4-2.857-5.714-2.286-4-5.143-8-9.714-13.143l-60.571-90.857h43.429v-61.143h-165.714v61.143h38.857l108 155.429-110.857 161.714h-38.857z"></path>
          </svg>
          <span>
            <span>יצוא לאקסל</span>
          </span>
        </div>
        <div className="chosen-calculator icon-btn">
          <svg viewBox="0 0 950.8571428571428 1024" className="chosen-icon4">
            <path d="M219.429 877.714c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM438.857 877.714c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM219.429 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM658.286 877.714c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM438.857 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM219.429 438.857c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM658.286 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM438.857 438.857c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM877.714 877.714v-219.429c0-40-33.143-73.143-73.143-73.143v0c-40 0-73.143 33.143-73.143 73.143v219.429c0 40 33.143 73.143 73.143 73.143v0c40 0 73.143-33.143 73.143-73.143zM658.286 438.857c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM877.714 256v-146.286c0-20-16.571-36.571-36.571-36.571h-731.429c-20 0-36.571 16.571-36.571 36.571v146.286c0 20 16.571 36.571 36.571 36.571h731.429c20 0 36.571-16.571 36.571-36.571zM877.714 438.857c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM950.857 73.143v877.714c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-877.714c0-40 33.143-73.143 73.143-73.143h804.571c40 0 73.143 33.143 73.143 73.143z"></path>
          </svg>
          <span>
            <span>חישוב</span>
          </span>
        </div>
      </div>
      <div className="chosen-body">
        <h1 className="chosen-text6">{props.heading}</h1>
      </div>
    </div>
  )
}

Chosen.defaultProps = {
  heading: 'שאלון',
}

Chosen.propTypes = {
  heading: PropTypes.string,
}

export default Chosen
