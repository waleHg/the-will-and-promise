import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Quote = ({ icon, verse, reference }) => (

  <div className="py-20 text-center">
  
  <div>
      {icon && (
        <GatsbyImage className="" alt={icon} image={icon} />
      )}
        </div>
<div className="p-4 md:p-8 w-auto lg:w-6/12 mx-auto">
  <span className="text-xl md:text-3xl font-bold pb-8">{verse}{" "}  <span className=" text-indigo-900">{reference}</span></span>

</div>
</div>


)


 


export default Quote
