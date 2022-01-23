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
 <div className="absolute top-64 md:top-48 md:left-32 p-8 md:p-16 bg-white md:w-4/12">
      <h1 className="text-3xl font-bold underline pb-8">{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
    </div>

   
 

)

export default Hero
