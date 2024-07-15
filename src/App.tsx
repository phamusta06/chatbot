import './App.css'
import SideBar from './components/sideBar/SideBar'
import Chat  from './pages/chat/Chat'
import { History } from './pages/history/History'
import { Home } from './pages/home/Home'
import { Routes,Route  } from 'react-router-dom'

function App() {
 
  return (
    <div className='flex bg-gradient-to-br from-gray-200 via-gray-500 to-black/50  min-h-screen'>
      <SideBar/>
      <Routes>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={ <History/>}/>
       
      </Routes>

       
       
     
    </div>
  )
}

export default App
