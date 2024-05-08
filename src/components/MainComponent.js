    import React from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Link } from 'react-router-dom';
    import './styles/main.css';

    export default function MainComponent() {

      const imagePath = process.env.PUBLIC_URL + '/images/about.jpg';

      return (
        <div className='main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <figure className='aboutImg'>
                            <img src={imagePath} alt='About'/>
                        </figure>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-12 col-lg-12'>
                                <div className='about-content'>
                                <h1>About Me</h1>
                                    <p>
                                        Hello, I am Aayush Niraula, a PHP Laravel Developer with around 3 years of experience in web development. I studied Computer Engineering at Kantipur Engineering College (Tribhuvan University) and am currently pursuing a Masters in Information Technology Management (MSc. ITM) at Lord Buddha Education Foundation, affiliated with Asia Pacific University of Technology and Innovation (APU), Malaysia.
                                    </p>
                                    <h2>What I Do?</h2>
                                    <p>I specialize in developing websites and web appliations using technologies like PHP (especially Laravel), MySQL, jQuery, Reach.js, vue.js and Node.js. I can handle both front-end and back-end development tasks</p>
                                    <h2>Other Skills</h2>
                                    <p>I am also familiar with content managemnt system like WordPress, designing tools like Canva and basic Photoshp for creating web graphics. Photography and travelling are my hobbies, and I enjoy capturing moments.</p>
                                    <h2>What Interests Me?</h2>
                                    <p>I'm interested in exploring Data Analytics and Management. I want to use my technical skills to analyze data and derive insights that can help businesses make better decisions</p>
                                    <p>I have a solid background in technology and am eager to continue learning and growing. If you're looking for someone who can build and design websites, let's connect and discuss how we can work together!</p>
                                    <br/>
                                    <div className='contactButton'>
                                        <Link to={'/'} className='btn btn-primary contactBtn'>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
    