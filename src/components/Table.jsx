import Paddle from "./Paddle";
import Ball from "./Ball";

const Table = (props) => {
  const handlingKeyDown = (e) => {
    e.preventDefault();
    if (e.key === "w" || e.key === "o") {
      return "increment";
    }
    if (e.key === "s" || e.key === "l") {
      return "decrement";
    }
  };
  return (
    <>
      <div
        style={{
          border: "5px solid black",
          width: "650px",
          minHeight: "350px",
          margin: "auto",
          padding: "50px",
        }}
        onKeyDown={(e) => handlingKeyDown(e)}
        tabIndex="0"
      >
        <Paddle color="blue" position="left" transform={{}} />
        <Ball />
        <Paddle color="red" position="right" transform={{}} />
      </div>
    </>
  );
};

export default Table;
