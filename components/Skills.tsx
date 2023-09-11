import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div id='skills' className='sm:grid-cols-1 md:grid-cols-4 sm:px-32 grid py-20 gap-4'>
      <div className='md:col-span-3'>
        <h1 className='text-3xl dark:text-sky-500 font-semibold pt-2'> What I do?</h1>
        <p className='pt-4 dark:text-muted-foreground tracking-wider text-xl leading-relaxed'>
          Design, Strategy, Management, and Development: These are my core competencies. In every project I undertake, I prioritize efficient workflows, foster clear communication, and rely on a strong dose of self-discipline. This unwavering work ethic has been the driving force behind my success across a diverse range of specialties.
        </p>
      </div>
      <div data-aos="flip-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000" className='md:col-span-1 rounded-md bg-gray-400/20 dark:bg-gray-300/10  p-4'>
        <h1 className='text-3xl font-semibold dark:text-sky-500 '>Skills</h1>
        <p className='tracking-wider text-lg leading-relaxed pt-2'>
          HTML / CSS / JS / React / Next.js / Node.js / Express.js / Tailwind CSS / MUI / TypeScript / Figma
        </p>
      </div>
    </div>

  )
}

export default Skills;