import { useState } from "react";

const Paddle = (props) => {
  // todo: keybind to paddle props.keyUp, props.keyDown
  //   modify transform: translateY(0px) increment 20px with each keypress,
  const [yValue, setYValue] = useState(120);

  const moveUpDown = (e) => {
    // e.preventDefault();

    if (e.key === props.keyUp) {
      console.log(e.key);
    }
    if (e.key === props.keyDown) {
      console.log(e.key);
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: props.color,
          width: "24px",
          height: "64px",
          marginLeft: props.position === "left" ? "50px" : "auto",
          marginRight: props.position === "left" ? "auto" : "50px",
          transform: `translateY(${yValue}px)`,
        }}
      ></div>
    </>
  );
};

export default Paddle;
