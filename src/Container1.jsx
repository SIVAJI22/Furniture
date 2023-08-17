import React from "react";
import { Fragment } from "react";
import "./Container1.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
export const Con1=()=>{
    return(
        <Fragment>
            <div id="Con1" className="container-fluid">
<div id="nav" className="container d-flex "> 
<img id="nav2" src="./navimage1.png" alt="" />
<div className="search">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

{/* <!-- The form --> */}
<form class="example" action="action_page.php">
<button type="submit"><i class="fa fa-search"></i></button>
  <input type="text" placeholder="Search.." name="search"/>

</form>
</div>
<Link><img id="nav3" src="./navimage2.png" alt="" />
</Link>

<Link><img id="nav3" src="./navimage3.png" alt="" />
</Link>

<Link><img id="nav3"  src="./navimage4.png" alt="" />
</Link>


</div>
<div id="trendy" className="container">
<span>TRENDY COLLECTION</span>
<h1>Make Our interior <br /> Unique & Modern.</h1> <br />
<h6>Turn Your Room with panto into a lot more minimalist and and modern</h6>
  
  <button className="btn btn-danger">Discover</button>
</div>

            </div>
        </Fragment>
    )
}