import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Jobnews from './pages/Jobnews'
import Error from './pages/Error'


export default function App() {
    return (
      <div> 
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} />
            <Route path= "/home" element={<Home />} />
            <Route path= "/job-news" element={<Jobnews />} />
            <Route path= "*" element={<Error /> } />
          </Routes>
        </BrowserRouter>

      </div>
    )
}
