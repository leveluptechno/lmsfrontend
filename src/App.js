import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./Layouts/Layout";
import Aboutpage from "./pages/Aboutpage";
import PsychometricTestPage from "./pages/PsychometricTestPage";
import ContactForm from "./pages/ContactFormPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordpage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordpage";
import SignupPage from "./pages/user/Signuppage";
import LoginPage from "./pages/auth/Loginpage";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Adminpanel/Dashboard";
import AddUser from "./Adminpanel/users/AddUsers";
import AllUsers from "./Adminpanel/users/AllUsers";
import AddAssignment from "./Adminpanel/assignments/AddAssignments";
import AllAssignments from "./Adminpanel/assignments/AllAssignments";
import AddCourse from "./Adminpanel/courses/AddCourses";
import AllCourses from "./Adminpanel/courses/AllCourses";
import AddStudent from "./Adminpanel/students/AddStudents";
import AllStudents from "./Adminpanel/students/AllStudents";
import AddTrainer from "./Adminpanel/trainers/AddTrainers";
import AllTrainers from "./Adminpanel/trainers/AllTrainers";
import Report from "./Adminpanel/Reports/Reports";
import Content from "./Adminpanel/Contents/Contents";
import Settings from "./Adminpanel/settings/Settings";
import Profile from "./Adminpanel/profile/Profile";

import CourseDetails1 from "./Services/CourseDetails1";
import CourseDetails2 from "./Services/CourseDetails2";
import CourseDetails3 from "./Services/CourseDetails3";
import Course1 from "./components/Course1";
import CollegePredictorForm from "./components/CollegePredictorForm";
import Servies1 from "./Services/Servies1";
import Service2 from "./Services/Service2";
import TrainingAndDev from "./Services/TrainingAndDev";
import ApplicationAssistance from "./Services/ApplicationAssistance";
import CareerCounseling from "./Services/CareerCounseling";
import CoursesPage from "./CoursesPage/CoursesPage";
import AdminLoginPage from "./pages/auth/AdminLogin";
import UserLoginPage from "./pages/user/UserLoginPage";
import Resource from "./pages/Resource";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route
              path="/psychometrictest"
              element={<PsychometricTestPage />}
            />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/resetpassword" element={<ResetPasswordPage />} />
            <Route path="/service1" element={<Servies1></Servies1>}></Route>
            <Route path="/service2" element={<Service2></Service2>}></Route>
            <Route
              path="/service1/course-details/1"
              element={<CourseDetails1></CourseDetails1>}
            ></Route>
            <Route
              path="/service1/course-details/2"
              element={<CourseDetails2></CourseDetails2>}
            ></Route>
            <Route
              path="/service1/course-details/3"
              element={<CourseDetails3></CourseDetails3>}
            ></Route>
            <Route
              path="/careercounseling"
              element={<CareerCounseling></CareerCounseling>}
            ></Route>
            <Route
              path="/applicationassistance"
              element={<ApplicationAssistance></ApplicationAssistance>}
            ></Route>
            <Route
              path="/traininganddev"
              element={<TrainingAndDev></TrainingAndDev>}
            ></Route>
            <Route
              path="/courses"
              element={<CoursesPage></CoursesPage>}
            ></Route>

            <Route path="/course1" element={<Course1></Course1>}></Route>
            <Route path="/resource" element={<Resource></Resource>}></Route>
            <Route
              path="/neetpredictortool"
              element={<CollegePredictorForm></CollegePredictorForm>}
            ></Route>
            <Route path="adminlogin" element={<AdminLoginPage />} />
            <Route path="/UserLoginPage" element={<UserLoginPage />} />

            {/* Other routes */}
            <Route
              path="/auth/reset-password"
              element={<ResetPasswordPage></ResetPasswordPage>}
            />
            {/* Other routes */}
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/adduser" element={<AddUser />} />
            <Route path="/admin/alluser" element={<AllUsers />} />
            <Route path="/admin/addassignment" element={<AddAssignment />} />
            <Route path="/admin/allassignment" element={<AllAssignments />} />
            <Route path="/admin/addcourses" element={<AddCourse />} />
            <Route path="/admin/allcourse" element={<AllCourses />} />
            <Route path="/admin/addstudents" element={<AddStudent />} />
            <Route path="/admin/allstudent" element={<AllStudents />} />
            <Route path="/admin/addtrainer" element={<AddTrainer />} />
            <Route path="/admin/alltrainers" element={<AllTrainers />} />
            <Route path="/admin/reports" element={<Report />} />
            <Route path="/admin/contents" element={<Content />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin/privacy-policy" element={<Profile />} />
            <Route path="/admin/terms-of-service" element={<Profile />} />
            <Route path="/admin/contact" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
