import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}  
      <a className='blue-text-gradient font-medium text-[18px]' href="https://www.linkedin.com/in/hectormosqueraturner/details/experience/" target="_blank" rel="noopener noreferrer" >More details about my experience</a>        
    </div>
  );
};

export default SectionWrapper(Tech, "");
