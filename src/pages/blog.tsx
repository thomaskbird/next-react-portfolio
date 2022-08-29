import { NextPage } from 'next'
import React from 'react'

const COMPONENT_NAME = 'Blog'

const Blog: NextPage = () => {
  return (
    <div className={`${COMPONENT_NAME}`}>
      <h1>Blog</h1>
    </div>
  )
}

export default Blog
