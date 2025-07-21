import React from "react";
import { useNavigate } from "react-router-dom";

function Support() {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/about")
  }
  
  function backHandler(){
    navigate(-1);
  }


  // doesn't works 
  function aageHandler(){
    navigate(+1);
  }
  return( 

  <div>

    <div>
    This is Support Page
    </div>

    <button onClick={clickHandler}>Move to Support Page</button>
    <button onClick={backHandler}>Go back</button>
    <button onClick={aageHandler}>Go aage</button>

  </div>
  );
}

export default Support;
