import React from "react";
import { Fragment } from "react";
import { Con1 } from "./Container1";
import { Con2 } from "./container2";
import { Con5 } from "./container5";
import { Con6 } from "./container6";

export const Home=()=>{
    return(
        <Fragment>
            <div className="container-fluid">
            <Con1/>
<Con2/>
<Con5/>
         <Con6/>   </div>
        </Fragment>
    )
}
export default Home;