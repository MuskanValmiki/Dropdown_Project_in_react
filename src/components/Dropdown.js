import React from "react";
import { useState} from "react";

function Dropdown(){
    const [Technologies,setTechnologies]=useState("Javascript")
        return(          
            <div id="signupbox">
              <center>   
                <select language={Technologies} onChange={(e) => {
                    setTechnologies(e.target.value)
                }} >
                    <option>Javascript</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>Scala</option>
                    <option>Spark</option>
                </select><br />
                <h1>This is program {Technologies} .</h1>
            </center> 
            </div>
        )            
    }

export default Dropdown;