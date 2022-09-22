import React from 'react'

export const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact-container'>
        <h2>Get in touch!</h2>
        <a href='mailto:noeliacaseres@hotmail.com' target="_blank"><p>noeliacaseres@hotmail.com</p></a>
        <div className='flex-container'>
            <div className='contact-item-content'>
              <a href="https://api.whatsapp.com/send?phone=541125260946" target="_blank"><img src="./images/icons/whatsapp.png" alt="whatsapp" className='contact-icon'/>Wa Me</a>
            </div>
            <br/>
            <div className='contact-item-content'>
              <a href="https://www.linkedin.com/in/noeliacaseres/" target="_blank"><img src="./images/icons/linkedin.png" alt="linkedin" className='contact-icon'/>LinkedIn</a>
            </div>
            <br/>
            <div className='contact-item-content'>
              <a href="https://github.com/noecaseres" target="_blank"><img src="./images/icons/github.png" alt="github" className='contact-icon'/>Github</a>
        </div>


        </div>
      </div>
    </div>
  )
}
