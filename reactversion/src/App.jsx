import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Jobnews from './pages/Jobnews'
import Error from './pages/Error'
<<<<<<< HEAD
import DisplayJobs from './pages/DisplayJobs';
=======
>>>>>>> 044e6f35e6b0729e62d5a07babee74ac0ea1430a


export default function App() {
    return (
      <div> 
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} />
            <Route path= "/home" element={<Home />} />
            <Route path= "/job-news" element={<Jobnews />} />
<<<<<<< HEAD
            <Route path="/display-jobs" element={<DisplayJobs />} />
=======
>>>>>>> 044e6f35e6b0729e62d5a07babee74ac0ea1430a
            <Route path= "*" element={<Error /> } />
          </Routes>
        </BrowserRouter>

      </div>
    )
}
