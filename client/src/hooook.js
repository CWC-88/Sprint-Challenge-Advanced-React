import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}

function MyComponent() {
  const width = useWindowWidth();
  return <span>window width {width}</span>;
}

function PPp() {
  return <MyComponent />;
}
export default PPp



