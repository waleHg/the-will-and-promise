import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className="flex flex-col md:flex-row md:justify-between py-4 gap-2 md:gap-0 pr-0 pl-8 md:pr-8 md:pl-8 lg:px-32" aria-label="Main">
    <Link to="/" className="flex gap-2 mx-auto md:mx-0 my-auto">
      <span className={styles.logo} />
      <span className={styles.navigationItem}>The will and promise</span>
    </Link>
    <ul className="flex flex-row gap-6 py-4 overflow-x-scroll scrollbar-hide ">
    
      <li className="whitespace-nowrap">
        <Link to="/blog/" activeClassName="whitespace-nowrap">
          About Us
        </Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="whitespace-nowrap">
          Experiences
        </Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="whitespace-nowrap">
          Resources
        </Link>
      </li>

      <li className="">
        <Link to="/blog/" className=" bg-indigo-800 text-white font-bold px-4 py-3 rounded-full hover:text-stone-100">
         Newsletter
        </Link>
      </li>
    </ul>
  
  </nav>
  
)

export default Navigation
