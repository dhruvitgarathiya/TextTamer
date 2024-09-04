import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function About () {

   const [myStyle, setMyStyle] = useState({color : 'white',
    backgroundColor : 'black'
 })

 const [btnText , setBtnText] = useState('Enable light mode');

  const toggleStyle = () => {
    if(myStyle.color === 'white'){
        setMyStyle({
            color : 'black',
    backgroundColor : 'white'
        })
        setBtnText('Enable dark Mode');
    }
    else{
        setMyStyle({
            color : 'white',
    backgroundColor : 'black'
    })
    setBtnText('Enable light Mode');
}}
        
    return (
                <div className="container my-3" style={myStyle}>
                    <h1 className="heading my-3">About Us</h1>
                    <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                About the website
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            About TextTamer :-
             TextTamer is a versatile text utility web application built using React.js, a popular JavaScript library for building user interfaces. As my first React project,TextTamer aims to provide users with a comprehensive set of tools to manipulate and analyze their text effortlessly.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              Key features
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
          Convert text to uppercase or lowercase with a single click,
                Copy text to clipboard using a dedicated button,
                Clear the text area with a clear button,
                Count the number of times a word appears in the text,
                Enable dark mode for a comfortable reading experience,
                Utilize React Router for seamless navigation between pages,

            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Tech Stack
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Built with React
                TextTamer leverages the power of React.js to create a dynamic and responsive user interface. By breaking down the application into reusable components, I was able to create a modular and maintainable codebase. React's virtual DOM and efficient rendering algorithms ensure that the application remains fast and responsive, even with complex text manipulations.
                Customizable and Extensible
                The application is designed to be easily customizable and extensible. Users can modify the appearance and behavior of the application by adjusting the CSS styles and React components. Additionally, new features can be added to the application by extending the existing functionality or creating new components.
            
            </div>
            </div>
        </div>
        </div>

        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div>

    
       </div>
);
    

};