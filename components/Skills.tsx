import React from 'react'

const Skills = () => {
  return (
    <div>
        <div id='skills' className='sm:px-32 grid grid-cols-4 py-20 gap-4'>
                <div className='col-span-3'>
                   <h1 className='text-3xl dark:text-sky-500 font-semibold pt-2'> What I do?</h1>
                   <p className='pt-4 dark:text-muted-foreground tracking-wider text-xl leading-relaxed'>
                   Design, Strategy, Management, and Development: These are my core competencies. In every project I undertake, I prioritize efficient workflows, foster clear communication, and rely on a strong dose of self-discipline. This unwavering work ethic has been the driving force behind my success across a diverse range of specialties.
                   </p>
                </div>
                <div className='col-span-1 rounded-md bg-gray-400/20 dark:bg-gray-300/10  p-4'>
                    <h1 className='text-3xl font-semibold dark:text-sky-500 '>Skills</h1>
                    <p className='tracking-wider text-lg leading-relaxed pt-2'>
                    HTML / CSS / JS / React / Next.js / Node.js / Express.js / Tailwind CSS / MUI / TypeScript / Figma
                    </p>
                </div>
        </div>
    </div>
  )
}

export default Skills