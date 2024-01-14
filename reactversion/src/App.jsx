import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Jobnews from './pages/Jobnews'
import DisplayJobs from './pages/DisplayJobs';
import Quizzes from './pages/Quizzes';
import Error from './pages/Error'


export default function App() {
    return (
      <div> 
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} />
            <Route path= "/home" element={<Home />} />
            <Route path= "/job-news" element={<Jobnews />} />
            <Route path="/display-jobs" element={<DisplayJobs />} />
            <Route path="/quizzes" element ={<Quizzes />} />
            <Route path= "*" element={<Error /> } />
          </Routes>
        </BrowserRouter>

      </div>
    )
}
