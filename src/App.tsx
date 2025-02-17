import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import RootStructure from "./styles/template/RootStructure"
import HomePage from "./pages/Home"

function App() {

  return (
    <Router>
      <RootStructure>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
        </Routes>
      </RootStructure>
    </Router>
  )
}

export default App
