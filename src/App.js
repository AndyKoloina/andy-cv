
import {BrowserRouter, Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Knowledges from "./pages/Knowledges"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Portfolio from "./pages/Portfolio"
const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/knowledges"  element={<Knowledges />} />
            <Route exact path="/contact"  element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/portfolio"  element={<Portfolio />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App