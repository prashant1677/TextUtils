import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "dark",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText]= useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode")
  //   } 
  //   else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode")

  //   }
  // };
  return (
    // <div style={myStyle} style={{backgroundColor:props.mode=='dark'?'#042743':'white'}}>
    <div style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
      <div className="d-flex flex-items-xxs-center flex-column">
        <h1 className="text-xxxl my-sm text-center text-normal p-a-0">
          <p>
            We Are <span className="text-pastel-blue text-bold">Text Utils {props.mode} </span>
          </p>
        </h1> 
        <h3 className="text-sm mb-xxl text-center">
          <p>Providing you with the most actionable Text Utilities.</p>
        </h3>
      </div>
      <div className="d-flex d-flex flex-items-xxs-center flex-items-lg-left flex-column flex-md-row p-a-0">
        <div className="col-12 col-md-6 d-flex flex-items-xxs-center flex-items-md-right">
          <div className="img-box" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
            {/* <img alt="mountain with apptopia flag on top" title="Providing you with the most actionable App Store data" className="img-fluid" loading="lazy" src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDUvMDUvMDUvNTUvNTMvNDAyZDVhOTEtZTMwMy00MTc0LTkyMTAtN2Q3YmQxMDM4ZmI1L0dyb3VwIDRAMngucG5nIl1d/9695760c59b32b16/Group%204%402x.png?name=Group+4%402x"></div></div><div className="col-12 col-md-6 d-flex align-items-start flex-column text-white"><div className="text-xs text-box"><p>At Apptopia, we want to solve the biggest problem in mobile: <strong>everyone is guessing</strong>.</p> */}
            <p>&nbsp;</p>
            <p>
              Publishers need to know what apps to build, how to monetize them,
              and where to price them. Advertisers and brands need to identify
              their target users, and determine where to allocate resources in
              order to reach them most effectively. Investors need to know which
              apps and genres are growing the quickest, and where users are
              really spending their time (and money).
            </p>
            <p>&nbsp;</p>
            <p>
              In business, we need <strong>data</strong> to make informed
              decisions. Apptopia provides the most actionable mobile app
              insights in the industry. We aim to make this data available to as
              many people as possible.
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* <button type="submit" className="btn btn-primary mx-1" onClick={toggleStyle}>
          {btnText}
        </button> */}
      </div>
    </div>
  );
}
