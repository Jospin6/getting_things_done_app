import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
      <div className='backgroundImage w-full h-[100vh]'>
        <Navbar/>
        <Projects/>
      </div>
    </>
  )
}

export default App
