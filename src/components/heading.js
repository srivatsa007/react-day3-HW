// import { useRef, useState } from 'react';

function Header() {
    // let myref1 = useRef(null);
    // let myref2 = useRef(null);
    // let myref3 = useRef(null);
    // let myref4 = useRef(null);
    // let myref5 = useRef(null);
    // const [show, setShow] = useState(true);
    // let s =0;

    // function activeState() {
    //     console.log(s);
    //     if(s===0){
    //         myref.current.style.backgroundColor = "#991F48";
    //         s=1;
    //     }
    //     else{
    //         myref.current.style.backgroundColor = "#A5A19E";
    //         s=0;
    //     }
    // }

    return (
        <div className="header">
            <div className="logo-section">
                <p id='big-headeing'>Family Wellness</p>
                <p id='sub-heading'>MASSAGE THERAPY</p> 
            </div>
            
            <nav id='navbar'>
                <button id='home' ><a href="#">HOME</a></button>
                <button id='about' ><a href="#landing-container">ABOUT</a></button>
                <button id='service' ><a href="#landing-container">SERVICES</a></button>
                <button id='faq' ><a href="#landing-container">FAQ</a></button>
                <button id='contact' ><a href="#landing-contact">CONTACT</a></button>
            </nav>

        </div>
    );

    // let btn = document.getElementById('btn');

}


export default Header;