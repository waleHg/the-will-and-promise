import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>The will and promise</span>
    </Link>
    <ul className={styles.navigation}>
    
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          About us
        </Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Shop
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
