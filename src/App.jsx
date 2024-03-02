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
          <Routes>
              <Route path="/course-selling-app/addCourse" element={<AddCourse/>} />
              <Route path="/course-selling-app/course/:courseId" element={<Course/>} />
              <Route path="/course-selling-app/courses" element={<Courses/>} />
              <Route path="/course-selling-app/signin" element={<Signin/>} />
              <Route path="/course-selling-app/signup" element={<Signup/>} />
          </Routes>
      </Router>
      </RecoilRoot>
    </div>
  )
}

export default App

