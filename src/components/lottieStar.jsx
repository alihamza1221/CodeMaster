import React,{useState} from 'react';
import Lottie  from 'react-lottie';
import animationData from '../images/svg/icons8-star.json';

export default function Star(props) {

    const [isStopped, setIsStopped] = useState(true); 
    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <>
            <div  onMouseEnter={() => setIsStopped(false)} // Add this line
                   onMouseLeave={() => setIsStopped(true)}>
                   <Lottie 
                     options={defaultOptions} 
                     style={{ width: 30, height: 30 }}
                     isStopped={props.isStopped === undefined ? isStopped : props.isStopped} 
                   />
            </div>
        </>
    )
}