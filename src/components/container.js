import React from 'react'

const Container = ({ children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag className="bg-slate-100 p-8 md:p-16"
      style={{
        maxWidth: 'var(--size-min-width)',
        margin: '0 auto',
        
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
