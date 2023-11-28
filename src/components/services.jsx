import React,{useState} from 'react';
import Star from './lottieStar.jsx';
import '../styles/content.css';

export default function Services({ children }) {
    const [isStopped, setIsStopped] = useState(true);
  
    return (
      <p
        onMouseEnter={() => setIsStopped(false)}
        onMouseLeave={() => setIsStopped(true)}
      >
        <Star isStopped={isStopped} />
        {children}
      </p>
    );
  }