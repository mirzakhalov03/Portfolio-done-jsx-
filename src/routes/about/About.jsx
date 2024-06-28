import React from 'react'
import './about.scss'
import pdfImg from "../../assets/img/pdf__file.webp"

const About = () => {
  return (
    <div className='about'>
        <div className="about__wrapper">
            <div className="container">
                <div className="about__content">
                    <h1>About</h1>
                    <div className="about__text-hug">
                    <div class="bio">
                        <h3>My Tale</h3>
                        <p>Hey, it's Javohir Mirzakhalov here, a 20-year-old with a head full of dreams and a heart set on IT. Currently, I'm deep into frontend development, but my ultimate goal? To become a software engineer who leaves a lasting impact, and even become the Elon Musk of the Muslim ummah. Wanna know what keeps me empowered? My incredible family. Growing up with three brothers and our loving parents has been nothing short of a blessing, filling our home with laughter and love every single day. After graduating LangApex's English course, I started to explore the world in English and gained valuable insights while teaching ESL and IELTS classes. And hey, I'm not just talk — I've bagged scholarships from seven American universities, and SAT(1330) and IELTS(8.0) scores inside my backpack. Currently, I'm honing my skills in "Najot — Ta'lim" for some IT courses. It's a journey, but with faith and determination, I'm ready to conquer the tech world, one code at a time.</p>
                    </div>
                    <div className="right__part">
                        <div className="skills-languages">
                            <h3>Languages</h3>
                            <div className='languages'>
                            <ul>
                                <li>- English</li>
                                <li>- Russian</li>
                                <li>- Uzbek</li>
                            </ul>
                            <ul>
                                <li>Fully proficient</li>
                                <li>Intermediate</li>
                                <li>Native</li>
                            </ul>
                            </div>
                        </div>
                        <div className="skills-languages">
                            <h3>Skills</h3>
                            <div className='languages'>
                            <ul>
                                <li>• Creativity</li>
                                <li>• Communication</li>
                                <li>• Critical Thinking</li>
                            </ul>
                            <ul>
                                <li>• Mentoring skills</li>
                                <li>• UI/UX designer</li>
                                <li>• Content making</li>
                            </ul>
                            </div>
                        </div>
                        <div className="cv__box">
                            <h3>Download CV & Recomendations</h3>
                            <div className="cv__wrapper">
                                <a href="https://drive.google.com/uc?export=download&id=1r6yqxK9VZ28mwIq1kARCwXY4xeP_uJOP"><div class="cv__card"><img src={pdfImg} alt=""></img></div><span>ESL vacancy</span></a>
                                <a href="https://drive.google.com/uc?export=download&id=1hc9nwG9QYXyYcRP4PEBs9ZF0UFHuM0oD"><div class="cv__card"><img src={pdfImg} alt=""></img></div><span>University</span></a>
                                <a href="https://drive.google.com/uc?export=download&id=1pQHAsjUvqs2TJmwgV8JvwOmlykottE16"><div class="cv__card"><img src={pdfImg} alt=""></img></div><span class="endorsement-span">Endorsement</span></a>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About