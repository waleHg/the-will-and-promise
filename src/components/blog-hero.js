import React from 'react'

const Hero = ({ image, title, content }) => (
 
    <div className="">
  
 <div className="p-8 md:p-16 md:bg-white bg-slate-50 text-center md:w-8/12 mx-auto">
      <h1 className="text-3xl font-bold pb-8">{title}</h1>
      {content && <p className="font-medium text-base md:text-xl">{content}</p>}
    </div>

    
    </div>

   
 

)

export default Hero
