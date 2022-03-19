import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <h1 className="text-3xl font-bold pb-8 text-center">Explore topics</h1>
      <ul className="flex gap-4 mb-8 md:mb-12 md:justify-center overflow-x-scroll p-4">
      <li className="">
      <Link to="/blog/" className="  bg-slate-600 text-white font-bold px-4 py-3 rounded-full hover:text-stone-100">
       Newsletter
      </Link>
    </li>
    
    <li className="">
      <Link to="/blog/" className=" bg-slate-200 text-gray-600 font-bold px-4 py-3 rounded-full">
       Newsletter
      </Link>
    </li>

    <li className="">
      <Link to="/blog/" className=" bg-slate-200 text-gray-600 font-bold px-4 py-3 rounded-full">
       Newsletter
      </Link>
    </li>

    <li className="">
      <Link to="/blog/" className=" bg-slate-200 text-gray-600 font-bold px-4 py-3 rounded-full">
       Newsletter
      </Link>
    </li>

    <li className="">
      <Link to="/blog/" className=" bg-slate-200 text-gray-600 font-bold px-4 py-3 rounded-full">
       Newsletter
      </Link>
    </li>
    <li className="">
      <Link to="/blog/" className=" bg-slate-200 text-gray-600 font-bold px-4 py-3 rounded-full">
       Newsletter
      </Link>
    </li>
  </ul>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
