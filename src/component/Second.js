import React from 'react';
import './../style/Second.css';
import Project from './image/Project.jpg';


const Second = () => {
    return (
        <section className="section-2" >
            <h1 className='about-me'>About Me</h1>

            <div className='container-2'>
                <div className='image-contain'>
                    <img src={Project} alt="Project" />;

                </div>

                <div className='text-3'>
                    <p>Front End Developer</p>
                    <p>HTML& CSS& Bootstrap</p>
                    <p>JavaScript, React Js</p>
                    <p>  PHP&PHP Laravel</p>
                    <p>UI&UX Designer</p>
                    <p>MySql & Microsoft SQL Server</p>
                    <p>Java& C</p>
                    <p>Google Doc&  Excel & Microsoft Word</p>



                </div>


            </div>



        </section>

    )

}

export default Second;
