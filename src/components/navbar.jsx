import React,{useState} from 'react';
import '../styles/navbar.css';
import {ReactComponent as SearchSvg} from '../images/svg/icons8-search.svg';

function NavBar(){
    
    function handleSearchClick(e){
        console.log({text});
        e.preventDefault();
    }
    const logo_Style = {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'f2f2f2df',
        cursor: 'pointer',
        fontFamily: 'sans-serif',
    };
    const [text, setText] = useState('');
    function hangleSearchInputTopic(e){
        console.log('Search input changed');
        setText(e.target.value);
    };
    
    return(
        <>
            <div className="navbar ">
                <div className="logo" style={logo_Style}>CodeMaster</div>

                <form className='search-topic'>
                    <input type='text' placeholder='Search a topic' value={text} onChange={hangleSearchInputTopic}/>
                    <button type='submit' onClick={handleSearchClick} >
                    <> < SearchSvg/ > </>Search
                    </button>
                </form>
            </div>
                    <ul className='nav-items'>
                        <li> <a href='#' >Home</a> </li>
                        <li><a href='#' >About</a></li>
                        <li><a href='#' >Services</a></li>
                        <li><a href='#' >Contact</a></li>
                    </ul>
        </>
    );
}

export default NavBar;