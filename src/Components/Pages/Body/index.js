import React from 'react'
import { useState } from 'react'
import './index.css'
import bodyImage from '../../Images/Service 24_7-pana 1.png'
import vectorIcon from '../../Images/Vector (2).png'
import phoneIcon from '../../Images/ic_baseline-phone.png'
import outLine from '../../Images/ic_outline-message.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>


const Body = () => {
  const onSubmit = () => {
    console.log(name, email, text)
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  return (
    <div className='body-container'>
      <div className='body-boxes'>
        <div className='b-box-1'>
          <div className='box-heading-div'>
            <p className='box-heading'>CONTACT US</p>
          </div>
          <div className='box-heading-description-div'>
            <p className='box-heading-description'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
          </div>
        </div>
        <div className='b-box-2'>
          <div className='b-box-2-first'>
            <div className='box-3'>
              <div className='box-3-button-1'>
                <img src={vectorIcon} className='vectorIcon-css' />
                <p className='text-1'>VIA SUPPORT CHAT</p>
              </div>
              <div className='box-3-button-2'>
                <img src={phoneIcon} className='phoneIcon-css' />
                <p className='text-1'>VIA  CALL</p>
              </div>
            </div>
            <div className='box-4'>
              <img src={outLine} className='outLine-css' />
              <p className='text-2'>VIA EMAIL FORM</p>
            </div>
            <form>
              <div className='box-5'>
                <p className='text-5'>Name</p>
                <input className='box-5-input' onChange={(event) => { setName(event.target.value) }} />
              </div>
              <div className='box-5'>
                <p className='text-5'>Email</p>
                <input className='box-5-input' onChange={(event) => { setEmail(event.target.value) }} />
              </div>
              <div className='box-6'>
                <p className='text-6'>Text</p>
                <input className='box-6-input' onChange={(event) => { setText(event.target.value) }} />
              </div>
              <div className='form-button'>
                <p className='form-button-text' onClick={onSubmit}>Submit </p>
              </div>
            </form>
          </div>
          <div className='b-box-2-second'>
            <img src={bodyImage} className='b-box-image-css' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body