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
<div className="pt-8">
  <h1 className="text-3xl font-bold pb-8">{verse}</h1>
  {reference && <p className={styles.content}>{reference}</p>}
</div>
</div>


)


 


export default Quote
