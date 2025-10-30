import Router from './routes/Router'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div className='h-screen w-full'>
      <ToastContainer/>
      <Router/>
    </div>
  )
}

export default App