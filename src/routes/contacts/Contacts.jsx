import React from 'react'
import './contacts.scss'
import "./card.css"
import telegram from "../../assets/img/telegram.png"
import instagram from "../../assets/img/instagram.png"
import facebook from "../../assets/img/facebook.webp"
import linkedin from "../../assets/img/linkedin.webp"
import github from "../../assets/img/github.png"
import gmail from "../../assets/img/gmail.webp"


const Contacts = () => {
  return (
    <div className='contacts'>
        <div className="contacts__wrapper">
            <div className="container">
                <div className="contacts__content">
                    <h1>Contacts</h1>
                    <div className="contacts__wrapper">
         <a href="https://www.instagram.com/mirzakhalov03/" target="_blank" className="card instagram">
          <div className="card-info">
            <div className="icons">
              <img style={{"width": "70px", "height": "70px"}} src={instagram} alt="" />
            </div>
            <div>
              <p className="title">INSTAGRAM</p>
              <p>@mirzakhalov03</p>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/javohir.mirzakhalov" target="_blank" className="card facebook">
          <div className="card-info">
            <div className="icons">
              <img src={facebook} alt=""></img>
            </div>
            <div><p className="title">FACEBOOK</p>
              <p>@javohir.mirzakhalov</p></div>
          </div>
        </a>
        <a href="https:t.me/mirzakhalov03" target="_blank" className="card telegram">
          <div className="card-info">
            <div className="icons">
              <img style={{"width": "70px", "height": "70px"}} src={telegram} alt="" />
            </div>
            <div>
              <p className="title">TELEGRAM</p>
            <p>@mirzakhalov03</p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/javohir-mirzakhalov-a5b979204/" className="card linkedin" target="_blank">
          <div className="card-info">
            <div className="icons">
              <img style={{"width": "70px", "height": "70px"}} src={linkedin} alt="" />
            </div>
            <div><p className="title">LINKEDIN</p>
              <p>Javohir Mirzakhalov</p></div>
          </div>
        </a>
        <a href="https://github.com/mirzakhalov03" target="_blank" className="card github">
          <div className="card-info">
            <div className="icons">
              <img src={github} alt=""></img>
            </div>
            <div><p className="title">GITHUB</p>
              <p>mirzakhalov03</p></div>
          </div>
        </a>
        <a href="mailto:javohirmirzakhalov@gmail.com" className="card gmail">
          <div className="card-info">
            <div className="icons">
              <img style={{"width": "70px", "height": "70px"}} src={gmail} alt="" />
            </div>
            <div><p className="title">GMAIL</p>
              <p>javohirmirzakhalov@gmail.com</p></div>
          </div>
        </a>
        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts