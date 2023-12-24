
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './routers/Router'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
