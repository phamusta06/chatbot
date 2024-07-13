import './App.css'
import SideBar from './components/sideBar/SideBar'
import Chat  from './pages/chat/Chat'

function App() {
 
  return (
    <div className='flex bg-[#E3F2FD] to-indigo-50 min-h-screen		'>
      <SideBar/>
      <Chat/>

       
    </div>
  )
}

export default App
