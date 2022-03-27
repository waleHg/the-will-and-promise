import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
 
    <div className="static">
      <div>
      {image && (
        <GatsbyImage className="bg-fixed w-full" alt={title} image={image} />
      )}
        </div>
 <div className="md:absolute md:top-48 md:left-12 lg:left-32 lg:p-16 p-8 md:p-12 md:bg-white bg-slate-50 md:w-9/12 lg:w-4/12">
      <h1 className="text-3xl font-bold pb-8">{title}</h1>
      {content && <p className="font-medium text-xl">{content}</p>}
    </div>
    </div>

   
 

)

export default Hero
