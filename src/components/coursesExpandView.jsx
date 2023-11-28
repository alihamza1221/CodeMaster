import React,{useState} from 'react';
import '../styles/courses.css';
import { ReactComponent as DropDownSvg } from '../images/svg/icons8-dropdown.svg';
import { ReactComponent as MacSvg } from '../images/svg/icons8-macbook-cards.svg';

export default function Courses(props){
    const [expand, setExpand] = useState(false);
    let styles = {};
    
    function handleExpnadOnClick(e){
        e.stopPropagation();
        setExpand(!expand);
    }
    if(expand){
        styles = {
           opacity: '1',
           height: 'auto',
           
       }
   }
   else{
        styles = {
           height: '0',
           opacity: '0',
       }
   }
    return(
    <>
    <div className='courseContainer'
      onClick={handleExpnadOnClick}>
      <div className='courseTitleView'>
          <MacSvg/>
          {props && <div className='courseName'>{props.courseName}</div>}
          <DropDownSvg/>
        </div>{ expand &&
        <div style={styles} className='courseDescription'>
          { props.courseDescription.map((tutorial)=>{
            return (
            <div  className='tutorial'>
             { props &&  <h3>Title: {tutorial.title}</h3>}
              {props &&  <p>
                    Duration: {tutorial.Duration}
                </p>}
            </div>
            )
           })}
        </div>
        }
    </div>   
    </>
    )
}