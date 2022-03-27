import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Newsletter = ({ image, heading, body }) => (

  <div className="md:flex flex-row items-stretch">

    <div className='basis-1/2 '>
     
      {image && (
        <GatsbyImage class="h-full" alt={heading} image={image} />
      )}
     
      
    </div>
    <div className="basis-1/2 p-8 md:p-16 md:bg-white bg-slate-50 mx-auto">
      <h1 className="text-3xl font-bold pb-8">{heading}</h1>
      {body && <p className="font-medium text-base md:text-xl md:w-9/12">{body}</p>}

      <form class="mt-8">
        <div class="flex flex-col gap-4">
          <div>
            <span class="block text-sm font-bold text-slate-700">
              Name
            </span>
            <input type="email" name="email" class="mt-1 px-4 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full md:w-9/12 rounded-md sm:text-sm focus:ring-1" placeholder="Name" />

          </div>
          <div>
            <span class="block text-sm font-bold text-slate-700">
              Email
            </span>
            <input type="email" name="email" class="mt-1 px-4 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full md:w-9/12 rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />

          </div>
          <Link to="/blog/" className="md:w-fit text-center bg-indigo-800 text-white font-bold px-6 py-4 mt-6 rounded-full hover:text-stone-100">
          Sign me up!
        </Link>
        </div>
       
      </form>
    </div>


  </div>




)

export default Newsletter
