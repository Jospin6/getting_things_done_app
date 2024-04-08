import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { CreateProjectPopup } from './components/CreateProjectPopup'

function App() {

  return (
    <>
      <div className='backgroundImage w-full h-[100vh] relative'>
        <Navbar/>
        <Projects/>
        <CreateProjectPopup/>
      </div>
    </>
  )
}

export default App
