import React from "react";
import { useNavigate } from "react-router-dom";

function Labs() {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/support");
  }

  return (
    <div>
      <div>
    
      This is Labs Page
    </div>

    <button onClick={clickHandler}>Move to about page</button>

    </div>
  );
  
};

export default Labs;
