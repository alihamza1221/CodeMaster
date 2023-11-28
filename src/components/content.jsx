import React,{useState} from 'react';
import Star from './lottieStar.jsx';
import '../styles/content.css';
import { ReactComponent as VRSvg } from '../images/svg/social-vr-glasses-for-virtual-content.svg';
import SetupImage from '../images/svg/outline-video-game-development-on-computer.svg';
import Services from './services.jsx';

export default function Content() {
    const imgeSize = {
        width: '100%',
        height: '100%',
        borderRadius:'10px'
    }
    const [isStopped, setIsStopped] = useState(true);
    const Servicestext = ['AI/ Ml','DevOps','Android Development','Web Development','Game Development']
    return(
        <>
           <div className='d-grid about'>
             <div className='left-box'>
             <h2> Services:</h2>
             {Servicestext.map((text) => (
                <Services children={text} />
             ))} 
             </div>
             <div className='right-upper-box'>
                <VRSvg className='image' style = {imgeSize} />
             </div>
             <div className='right-lower-box'>
             <img className='image' src={SetupImage} style ={imgeSize} />
             </div>
           </div>
        </>
    )
}