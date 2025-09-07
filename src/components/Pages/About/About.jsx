import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'

const About = () => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
        {/* heading */}
        <div className='flex flex-col items-center'>
            <h1 className='inline-block tet-3xl 
            text-center font-bold mb-3 border-b-2
            border-primary pb-1'>About</h1>
            <p className='text-sm text-slate-500 text-center md:w-[80%] mx-auto'>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing ellit. quae eius 
                velit vokluptatum animi aliquid!
            </p>
        </div>
        {/* detail section */}
        <div className='mt-10 text-slate-500'>
            <p>
                Lorem ipsum dolor sit amet consecteeur
                adipisicing elit. Beatae
                quaerat ex obcaecati tenetur dolorum quasi
                rem! Vero consequuntur
                perferendis architecto.
            </p>{ " "}
            <br/>
            <p>
                Lorem ipsum , dolor sit amet consectetur
                adipisicing elit. Enim,
                beatae. adipisicing elit. Enim, beatae. 
            </p>
            {/* Social Links */}
            <div className='flex space-x-4 mt-10'>
                <MdFacebook className='social-btn'/>
                <AiFillInstagram className='social-btn'/>
                <AiFillGithub className='social-btn'/>
                <AiFillLinkedin className='social-btn'/>
            </div>
            {/* Button Link */}
            <div className='flex space-x-4 mt-4'>
                <a href='#' className='primary-btn'>
                    Download Resume
                </a>
                <a href='#' className='outline-btn'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default About