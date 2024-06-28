import React from 'react'
import './home.scss'
import heroImg from "../../assets/img/my_photo2.jpeg"

const Home = () => {
  return (
    <main>
        <div className="hero__wrapper">
            <div className="hero__profile">
                <div className="profile__img">
                    <div className="image__hug">
                        <img src={heroImg} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="hero__content">
            <div className="container">
                <div className="hero__intro">
                    <span className="hello">Hello, world! </span>
                    <h1>I'm <strong>Javohirbek <br/> Mirzakhalov</strong></h1>
                    <span>Aspiring Software Engineer</span>
                    <br/>
                    <small>"Welcome to my world of pixel-perfect creations."</small>
                </div>
            </div>
            </div>
        </div>
    </main>
  )
}

export default Home