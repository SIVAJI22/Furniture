import React from "react";
import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./bedcontainer.css";
export const Con4=()=>{
    return(
        <Fragment>
            <div id="con4" className="container-fluid">
<Row>
    <Col  xs={1} md={1} sm><img id="rectangle20" src="./Rectangle 20.png" alt="" />
    </Col> 
    <Col   xs={1} md={1} ><img id="rectangle21"src="./Rectangle 21.png" alt="" />
    <img  id="rectangle21" src="./Rectangle 22.png" alt="" />
    </Col>
    
    <Col xs={1} md={1}  sm><img  id="rectangle23"src="./Rectangle 23.png" alt="" />
    <img  id="rectangle24"src="./Rectangle 24.png" alt="" />
    </Col>

    <Col xs={1} md={1}   sm><img id="rectangle25" src="./Rectangle 25.png" alt="" />
    <img id="rectangle25" src="./Rectangle 26.png" alt="" />
    </Col>
    
    <Col xs={3} md={1}   sm><img id="rectangle27"src="./Rectangle 27.png" alt="" />
    </Col>
</Row>
            </div>
        </Fragment>
    )
}
export default Con4;