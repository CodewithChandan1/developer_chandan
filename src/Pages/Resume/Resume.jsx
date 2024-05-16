import './ResumeStyle.css'
import React from 'react'

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };


    return (

        <div className='ResumeMainDev'>
            <div class="button_design">
                <div class="left_btn">
                    <a href="/assets/img/Resume.pdf" target="_blank" rel="noopener noreferrer">Download Pdf</a>
                </div>
                <div class="right_btn">
                    <button onClick={handlePrint}>Print</button>
                </div>
            </div>

            <div class="wrapper mt20 mb-20">

                {/* <!------------------- Body Of Resume ------------------> */}
                <div class="container">
                    <header>
                        <div class="left_header">
                            <img src="/assets/img/about.JPG" alt="logo" class="profile" />
                            <div class="details">
                                <h2>Chandan</h2>
                                <h3>Mern Full Stack Developer</h3>
                                <div>
                                    <a href="https://www.linkedin.com/in/chandan-4b0236193/" rel="noopener noreferrer" target="_blank">LinkedIn Profile</a>
                                    <a href="https://github.com/Chandan220" rel="noopener noreferrer" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                        <div class="right_header">
                            <div class="contact1">
                                <a href="tel:+917986341501" rel="noopener noreferrer" className='detailslist'>+917986341501</a>
                                <img src="/assets/icon-things1.png" alt="Phone" class="contact_icons" />
                            </div>
                            <div class="email-div contact1">
                                <a href="mailto:ck425789@gmail.com@gmail.com" rel="noopener noreferrer" className='detailslist'>ck425789@gmail.com</a>
                                <img src="/assets/icon-things3.png" alt="email" class="contact_icons2" />
                            </div>
                            <div class="contact1">
                                <div className='detailslist'>Punjab, India</div>
                                <img src="/assets/icon-things2.png" alt="location" class="contact_icons" />
                            </div>
                        </div>
                    </header>
                    {/* <!----------------- Objective Section -----------------> */}
                    <div class="objective">
                        <h2>CAREER OBJECTIVE</h2>
                        <p>
                            Looking for an opportunity to work in a challenging position to
                            prove my computer science skills and utilize my knowledge and
                            intelligence in the growth of organization.
                        </p>
                    </div>
                    <div class="border_obj">
                        <span class="point_obj"></span>
                    </div>
                    {/* <!--------- Divide Two Side Left or Right Side ---------> */}
                    <div class="main_project_skill">
                        <div class="transing_main_div">
                            <div class="project_div">
                                <h2>TRAINING & PROJECTS</h2>
                                <div class="tr_div">
                                    <h4>TRAINING</h4>
                                    <p>
                                       I have completed my 6 month industrial Training From o7Services IT Company Jalandhar
                                    </p>
                                </div>
                                <div class="pro_links">
                                    <h4>PROJECTS</h4>
                                    <ul>
                                        <li><a href="https://my-portfolio-chandan.netlify.app" rel="noopener noreferrer" target="_blank">My Portfolio</a></li>
                                        <li>
                                            <a href="https://landing-page-in-html-css-js.netlify.app" rel="noopener noreferrer" target="_blank">landing-page-in-html-css-js(Frontend view)</a>
                                        </li>
                                        <li><a href="https://landing-page-in-bootstrap.netlify.app" rel="noopener noreferrer" target="_blank">landing-page-in-bootstrap
                                            </a></li>
                                        
                                        <li><a href="https://vtech-landing-page-html-css-js.netlify.app" rel="noopener noreferrer" target="_blank">vtech-landing-page-html-css-js</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tech">
                                    <h4>TECHNOLOGY USED</h4>
                                    <p>HTML, CSS, Tailwind CSS</p>
                                </div>
                            </div>
                            {/* <!------------- Border -------------> */}
                            <div class="border_obj after-traning-border">
                                <span class="point_obj"></span>
                            </div>
                            {/* <!------------- Education -------------> */}
                            <div class="education">
                                <h2>EDUCATION</h2>
                                <div class="tenth">
                                    <h4>MATRICULATION</h4>
                                    <span>2016 - 2017</span>
                                    <p>
                                        2016-2017 I have done my matric education with 77% from Govt. model senior secondary school P.A.P campus.
                                    </p>
                                </div>
                                <div class="sr-sec">
                                    <h4>SENIOR SECONDARY</h4>
                                    <span>2018 - 2019</span>
                                    <p>
                                        I have done my secondary education with 65% (non-medical) from
                                        Govt. model senior secondary school P.A.P campus.
                                    </p>
                                </div>
                                <div class="graducation">
                                    <h4>GRADUATION</h4>
                                    <span>2019 - 2023</span>
                                    <p>
                                        Bachelor of Technology and Computer Science. From- Guru Nanak Dev University Jalandhar
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!------------------------- Right Side ------------------ --> */}
                        <div class="pro_skills_div">
                            <div class="border_rightside">
                                <span></span>
                            </div>
                            <div class="div_pro_s">
                                <h2>PRO SKILLS</h2>
                                <div class="skill_type">
                                    <p>Html</p>
                                    <div class="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Css</p>
                                    <div class="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Tailwind css</p>
                                    <div class="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Bootstrap</p>
                                    <div class="strength_progress">
                                        <span class="progress_color1"></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>React js</p>
                                    <div class="strength_progress">
                                        <span class="progress_color"></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Node js</p>
                                    <div class="strength_progress">
                                        <span class="progress_color"></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Express js</p>
                                    <div class="strength_progress">
                                        <span class="progress_color"></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>MongoDB</p>
                                    <div class="strength_progress">
                                        <span class="progress_color"></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>GitHub</p>
                                    <div class="strength_progress">
                                        <span class="progress_color"></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!------------- Border -------------> */}
                            <div class="border_obj after-traning-border">
                                <span class="point_obj"></span>
                            </div>
                            {/* <!------------------- Strengths -------------------> */}
                            <div class="strengths_main">
                                <h2>STRENGTHS</h2>
                                <div class="skill_type">
                                    <p>Punctuality</p>
                                    <div class="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Hard Work</p>
                                    <div class="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Team Work</p>
                                    <div class="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="skill_type">
                                    <p>Leadership</p>
                                    <div class="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!------------- Border -------------> */}
                            <div class="border_obj after-traning-border">
                                <span class="point_obj"></span>
                            </div>
                            {/* <!------------------------ Certificates ---------------------> */}
                            <div>
                                <h2>CERTIFICATIONS</h2>
                                <div class="certi_lang">
                                    <p>Html, Css & Tailwind css, React js,Node js, Express js, MongoDB, GitHub</p>
                                </div>
                            </div>
                            <div>
                                <h2>LANGUAGES</h2>
                                <div class="certi_lang">
                                    <p>Hindi, Punjabi & English</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume
