import React from "react";
import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./container2.css";
import Con3 from "./Chaircontainer";
import Con4 from "./Bedcontainer";
import { Link } from "react-router-dom";
export const Con2=()=>{
    return(
        <Fragment>


    


            <div id="con2" className="container-fluid">

    <div  className="   bedcontainer1 d-flex">
  <Row>
    <Col    sm={2}>  
    <Link>
    <img   className="sofa" src="./Group 5.jpg" alt="" /> <br />
    <span id="sofa">Sofa</span>
    </Link>
    

    </Col>
    <Col>    
    <Link>
    <img id="bedcontainer  "  className="Tv" src="./Group 6.png" alt="" /><br />
    <span id="tv">Tv Limits</span>
    </Link>
    </Col>

     
    <Col> 
    <Link>
    <img  id="Study"   src="./Group 7.png" alt="" /><br />
    <span id="study">Study</span>
    </Link>

    </Col>

  
       
   
        <Col>
      
        <Link>
        <img id="bedcontainer  "  src="./Group 8.png" alt="" /><br />
        <span id="bed">Bed</span>
    </Link>
        </Col>
        <Col sm={2}>
      
        <Link>
        <img id="Dining"    src="./Group 9.png" alt="" /><br />
        <span className="dining">Dining</span>
    </Link>
        </Col>
        <Col sm={1}>
      
        <Link>
        <img id="bedcontainer "   src="./Group 4.png" alt="" /><br />
        <span id="lamp">Lamp</span>
    </Link>
        </Col>
        <Col sm={1}>
    
        <Link>
        <img  src="./Group 10.png" alt="" />
        <img className="chair  " src="./Vector 55.png" alt="" /><br />
        <span id='chair'>Chair</span>
    </Link>
        </Col>
        <Col sm={1}>
     
        <Link>
        <img src="./Group 11.png" alt="" />
        <span className=" showracks d-flex">Shoe Racks</span>
    </Link>
        </Col>
        </Row>
      
</div>

<div  >

<Row>
    <Col sm={6}>
    <div className="Longsofa  container" >

        
              <img  id="offer" src="./image 4.png" alt="" />
            
          <div className="Most"  >        <h5 id="Long">Long Sofa</h5>
  
  <h5>Most comfortable</h5><h5 id="oneforyou">one for you</h5>    
<br /> 
<button id="buynow" className="btn btn-danger">Buy now</button>  
            </div>  
    

        <img id="sofa1" src="./image 3.png" alt="" />

      
    </div>
    </Col>
    <Col sm={6} >
    <div className="Longsofa1  container"  >
      
      <img id="offer" src="./image 4.png" alt="" />
            <div className="Most"  >
            <h5 className='diningchair '>
                Dining Chair
            </h5>
  
  <h5>Eat Special food with</h5>
<h5 id="specialchair">Special Chair</h5>    <br />
<button id="buynow" className="btn btn-danger">Buy now</button>
            </div>
            
        
 <img id="sofa2" src="./image 6.png" alt="" />

      
      
    </div>
    </Col> 
</Row>



</div>
<br />
<h2 className="trending">Trending Products</h2>
 <Con3/> <br /> <br />
 <Con4/>
</div>
        </Fragment>
    )
}