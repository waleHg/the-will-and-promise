import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, content }) => (
 
    <div className="static">
      <div>
      {image && (
        <GatsbyImage className="" alt={image} image={image} />
      )}
        </div>
 <div className="md:left-32 p-8 md:p-16 bg-white">
      {content && <p className={styles.content}>{content}</p>}
    </div>
    </div>

   
 

)

export default Hero
