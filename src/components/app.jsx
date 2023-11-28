import React from 'react';
import NavBar from './navbar.jsx';
import Content from './content.jsx';
import '../styles/global.css';
import Course from './coursesExpandView.jsx';
import CourseDetails from './coursesdeatils.js';
import Footer from './foooter.jsx';
function App(){

    document.body.style = 'background: black;';
return(
 <React.Fragment>
  <NavBar />
  <Content />
 { Object.entries(CourseDetails).map(([key, value],index) => {
  return (
    <Course
      key = {index}
      courseName={key}
      courseDescription={value}
    />
  );
})}
  <Footer />
 </React.Fragment>
);
}
export default App;