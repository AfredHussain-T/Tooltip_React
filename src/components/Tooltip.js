import React, { Component } from "react";
import "../tooltip.css";


// function Tooltip() {
//   const [direction, setDirection] = useState('my-tooltiptext t-top');
//   const [content, setContent] = useState('Hover Content');


//   //  function to change values if data change
//   const hanldeTooltip = () => {
//     // setting content
//     setContent(content);

//     // setting up direction according to direction
//     if (direction === "top") {
//       setDirection("my-tooltiptext t-top");
//     } else if (direction === "right") {
//       setDirection("my-tooltiptext t-right");
//     } else if (direction === "left") {
//       setDirection("my-tooltiptext t-left")
//     } else {
//       setDirection("my-tooltiptext t-bottom")
//     }
//   }
//   return (
//     // div for bidning componet for tooltip
//     <div className="my-tooltip" onMouseEnter={hanldeTooltip}>
//       {/* span for tooltip text */}
//       <span className={direction}>{content}</span>
//       {/* componet fetching from where is called */}
//       {/* {props.children} */}
//     </div>
//   );

// }
// export default Tooltip;

export default class Tooltip extends Component {
  // constructor to create state for this class
  constructor() {
    super();
    this.state = {
      direction: "my-tooltiptext t-top",
      content: "Hover Content",
    };
  }

  //  function to change values if data change
  hanldeTooltip = () => {
    // setting content
    this.setState({
      content: this.props.content,
    });

    // setting up direction according to direction
    if (this.props.direction === "top") {
      this.setState({
        direction: "my-tooltiptext t-top",
      });
    } else if (this.props.direction === "right") {
      this.setState({
        direction: "my-tooltiptext t-right",
      });
    } else if (this.props.direction === "left") {
      this.setState({
        direction: "my-tooltiptext t-left",
      });
    } else {
      this.setState({
        direction: "my-tooltiptext t-bottom",
      });
    }
  };

  render() {
    return (
      // div for bidning componet for tooltip
      <div className="my-tooltip" onMouseEnter={this.hanldeTooltip}>
        {/* span for tooltip text */}
        <span className={this.state.direction}>{this.state.content}</span>
        {/* componet fetching from where is called */}
        {this.props.children}
      </div>
    );
  }
}