import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

function App (){
  const [content , setContent] = useState('Tooltip Content');
  const [direction , setDirection] = useState('top');
  const handleContentInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      setContent(e.target.value)
    } else {
      setContent(content);
    }
  };

  // function to handle direction according to select option
  const handleDirectionInput = (e) => {
    console.log(e.target.value);
    setDirection(e.target.value);
  };

  return (
    <div className="App">
      {/* Start :For Input Value to Change Direction & Content of Tooltip */}
      <div>
        {/* heading */}
        <h1>Tooltip</h1>
        <div className="form-div">
          <label className="form-label">Enter Content</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your tooltip to display..."
            onKeyUp={handleContentInput}
          />
        </div>
        <div className="form-div">
          <label>Select Position </label>
          <select
            className="form-select"
            onChange={handleDirectionInput}
          >
            <option value="top">Top</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
      </div>
      {/* End :For Input Value to Change Direction & Content of Tooltip */}

      {/* This is Tooltip I created */}
      {/* To use tooltip you have to bind component inside tooltip */}
      <Tooltip content={content} direction={direction}>
        {/* calling button component */}
        <Button />
      </Tooltip>
    </div>
  );
}

export default App;

