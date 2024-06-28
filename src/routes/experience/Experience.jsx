import React from 'react'
import './experience.scss'
import dombit from "../../assets/img/myStudents.jpg"
import dombit2 from "../../assets/img/group_img.jpg"
import ziyokor from "../../assets/video/ziyokor.mp4"

const Experience = () => {
  return (
    <div className='experience'>
        <div className="experience__wrapper">
            <div className="container">
                <div className="experience__content">
                    <h1>Experience</h1>
                    <div className="experience__text-hug">
                        <div className="workplace">
                            <h3>Langapex</h3>
                            <ul>
                                <li><span>Period:</span> 2022 - 2023</li>
                                <li><span>Position:</span> ESL Teacher</li>
                            </ul>
                            <br />
                            <p>"Dombit"... The Place where you not only learn English but also valuable life experiences. I'm wordless to describe the impact of Dombit. Right after graduating this course, I was recruited by Langapex as an ESL Teacher.</p>
                            <div className="showcase">
                                <img className='dombit-pic1' src={dombit} alt="" />
                                <img src={dombit2} alt="" />
                            </div>
                        </div>
                        <div className="workplace" style={{border: "none"}}>
                        <h3>Ziyokor</h3>
                            <ul>
                                <li><span>Period:</span> August 2023 - December 2023</li>
                                <li><span>Position:</span> IELTS Mentor</li>
                            </ul>
                            <br />
                            <p>This is where I started my professional teaching career. I was appointed as an IELTS mentor. Taught over 100+ students within a 4-month period, who then graduated the course with desired scores like 7.0 and 6.5. </p>
                            <div className="showcase">
                                <video muted autoPlay loop src={ziyokor}></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience