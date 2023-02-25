import './About.css'

import about from '../../assets/images/about.png'

function About() {
    return ( 
        <>
         <h1 className='about_title'>About Me</h1>
        <div className='about_wrapper'>
            <img src={about} alt="photoMe" />
            <div className='about_content'>
            <p>
          React developer with a passion for creating dynamic and responsive
          user interfaces. Skilled in developing high-quality web applications
          and building reusable components. Strong knowledge of JavaScript,
          HTML, and CSS. Proven ability to work collaboratively in
          cross-functional teams and deliver projects on time. Committed to
          staying up-to-date with the latest advancements in the React ecosystem
          and applying best practices to create performant and scalable
          applications.
        </p>
            </div>
        </div>
        </>
     );
}

export default About;