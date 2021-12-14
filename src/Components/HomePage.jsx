import react from "react";
import '../css/homepage.css';
import {Button, Alert} from 'react';

function HomePage(){

    return(
        <div>
            <h2>This is a test!</h2>
            <button onClick={() => {alert("test")}}>Login</button>
        </div>
    
    );


}




export default HomePage;