import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Quote = ({ icon, verse, reference }) => (

  <div className="py-24 text-center">
  
  <div>
      {icon && (
        <GatsbyImage className="" alt={icon} image={icon} />
      )}
        </div>
<div className="p-8">
  <span className="text-3xl font-bold pb-8">{verse}{" "}  <span className=" text-indigo-900">{reference}</span></span>

</div>
</div>


)


 


export default Quote
