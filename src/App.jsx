import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Appbar from './Appbar.jsx';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import AddCourse from "./AddCourse.jsx";
import Courses from "./Courses.jsx";
import Course from "./Course.jsx";
import { RecoilRoot } from 'recoil';


function App() {

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"}}>


      <RecoilRoot>
      <Router>
          <Appbar/>
          <Routes>1
              <Route path="/addCourse" element={<AddCourse/>} />
              <Route path="/course/:courseId" element={<Course/>} />
              <Route path="/courses" element={<Courses/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<Signup/>} />
          </Routes>
      </Router>
      </RecoilRoot>
    </div>
  )
}

export default App