import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas, RoomCanvas, ModeloCanvas } from "./components";
import { SocialIcon } from 'react-social-icons'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center opacity: 9.9; '>        
          <Navbar />
          <Hero />          
        </div>
        
        <About />
        <Experience />        
        <Works />
        <div className='relative z-0'>
          <Education />                
          <Tech />        
          <Contact />
          <StarsCanvas />
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-10 sm:px-16 px-16 sm:py-1 py-1'> 
          <p className='blue-text-gradient font-medium text-[14px]'>hmosqueraturner@gmail.com</p>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-10 sm:px-16 px-16 sm:py-1 py-1'>         
          <SocialIcon className='margin-left: auto;' label="Profile" url="https://www.linkedin.com/in/h%C3%A9ctor-mosquera-turner-8a32004b/" />
          <SocialIcon className='margin-left: auto;' label="Web Document" network="google" url="https://sites.google.com/view/hectormosqueraturner/"/>
          <SocialIcon className='margin-left: auto;' label="All my links" url="https://linktr.ee/hectorTechno" />
          <SocialIcon className='margin-left: auto;' label="Code On-line" url="https://github.com/hmosqueraturner" />
          <SocialIcon className='margin-left: auto;' label="My video channel" url="https://www.youtube.com/@hectormosqueraturner8431" />
        </div>        
        <div className='flex flex-row flex-wrap justify-center gap-10 sm:px-16 px-16 sm:py-1 py-1'> 
          <p className='sm:text-[14px] text-[14px] text-secondary'>+34 644208987</p>
        </div>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
