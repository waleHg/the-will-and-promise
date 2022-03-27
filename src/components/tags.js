import React from 'react'

import * as styles from './tags.module.css'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className="py-2 font-bold rounded-none">
      {tags.map((tag) => (
        <div key={tag} className=" bg-slate-200 py-1 px-2 w-fit">
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
