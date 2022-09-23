import React from 'react'

export const Education = () => {
  return (
    <section id='education'>
        <h2>Education & Skills</h2>
        <h3>Education</h3>
        <div className='grid-container'>
            <div className='card'>
                    <div className='card-content'>
                        <h4>Industrial Engineering Degree</h4>
                        <p>National University of La Plata</p><br/>
                        <p>September 2015</p>
                    </div>
                    <div className='card-content'>
                        <h4>HTML & CSS</h4>
                        <p>Udemy</p><br/>
                        <p>March 2021</p>
                    </div>
                    <div className='card-content'>
                        <h4>JavaScript</h4>
                        <p>Jon Mircha</p><br/>
                        <p>July 2021</p>
                    </div>
                    <div className='card-content'>
                        <h4>React: From zero to expert (Hooks and MERN).</h4>
                        <p>Udemy</p><br/>
                        <p>December 2021</p>
                    </div>
                    <div className='card-content'>
                        <h4>GraphQL with React: The complete developers guide.</h4>
                        <p>Udemy</p><br/>
                        <p>February 2022</p>
                    </div>
                    
            </div>
        </div>
        <h3>Skills</h3>
            <div className='card-skills'>
                <div className='skills-list'>
                    <div><img src="./images/icons/html5.svg"/>HTML</div>
                    <div><img src="./images/icons/css3.svg"/>CSS</div>
                    <div><img src="./images/icons/js.svg"/>JavaScript</div>
                    <div><img src="./images/icons/react.svg"/>ReactJS</div>
                    <div><img src="./images/icons/bootstrap.svg"/>Bootstrap</div>
                    <div><img src="./images/icons/sass.svg"/>Sass</div>
                    <div><img src="./images/icons/restapi.svg"/>REST API</div>

                </div>
            </div>
    </section>
  )
}
