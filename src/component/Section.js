import React from 'react';
import './../style/Section.css';
import man from './image/man.jpg';

const Section = () =>  {
    return (
        <section className='main-section'>
            <div className='section'>
                <div className='text'>
                    <h1> HELLO MY NAME IS</h1>
                    <h1 className='h1-name'>
                        MIS MANTASHA PARVIN
                    </h1>
                    
                    <p>Professional front-end reacr js developer</p>
                   <button type="button">My Work</button>
                   
                </div>
                    <div className='image' >
                   <img src={man} alt="man" />;
                    </div>
                
            </div>
        </section>
        
    )
  
}

export default Section;
