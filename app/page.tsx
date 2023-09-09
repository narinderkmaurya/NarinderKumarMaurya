import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className='px-4'>
      <Navbar />
      <Header/>
      <Projects/>
      <Skills/>
    </div>
  )
}
