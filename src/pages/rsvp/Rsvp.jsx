import { spring } from 'framer-motion';
import { useState } from 'react';
import thisIsDate from '../../assets/images/date.png';

import { easeInOut, motion } from 'framer-motion';

import { IoIosSend } from 'react-icons/io';


import './rsvp.scss';
import { is } from '@react-spring/shared';

const Rsvp = () => {
  const [isOn, setIsOn] = useState(false);
  const [fillOut, setFillOut] = useState('')
  const [invited, isInvited] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };


  const fillOutForm = (e) => {
    if (fillOut.length == 0) {
      e.preventDefault()
    } else {
      e.preventDefault()
      console.log('yehey')
      isInvited(true)
      // navigate('/search')
      // setQuery(searchQuery)
      // setPageNumber(1)
    }
  }


  return (
    <div className='rsvp'>
      <div className='container'>
        <h1>
          Come to celebrate with us
        </h1>

        <div className='date'>
          <img src={thisIsDate} alt="" className='date__img' />
        </div>

        <h3>04:00 pm</h3>

        <p>Jollibee - Level 1 Portal Mall, Congressional Road,
          Brgy. Poblacion 1, Gen. Mariano Alvarez.
        </p>

        {/* <div className='CTA'> */}
        <div className={!invited ? 'CTA' : 'CTA__hide'}>
          <div className='CTA__header'>
            <h1>are you in?</h1>


            <button className='switch__container' data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div layout transition={spring} className='switch' />
            </button>

          </div>
        </div>

        {/* <form action=""> */}
        <form onSubmit={fillOutForm} className={invited ? 'hide' : ''}>
          <input
            type="text"
            placeholder='confirm with your name'
            value={fillOut}
            onChange={(e) => setFillOut(e.target.value)}
          />

          <button type='submit' className='send__btn'>
            <IoIosSend className='send__icon' />
          </button>
        </form>

        {/* <div className={invited ? 'done' : 'not-done'}> */}
        <div className={invited && !isOn ? 'done' : 'not-done'}>

          <motion.div className='see-you-there'>
            <h1>
              see you there! 🥳
            </h1>
            <h2>{fillOut}</h2>
          </motion.div>

        </div>

        <div className={invited && isOn ? 'done' : 'not-done'}>

          <motion.div className='see-you-there'>
            <h1>
              why? 😭
            </h1>
            <h2>{fillOut}</h2>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Rsvp