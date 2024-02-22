import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Appbar from './Appbar.jsx';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import AddCourse from "./AddCourse.jsx";


function App() {

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"}}>


      <Router>
          <Appbar/>
          <Routes>
              <Route path="/addCourse" element={<AddCourse/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<Signup/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App

