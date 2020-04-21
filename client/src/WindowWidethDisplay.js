import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useWindowWidth } from "./useWindowWidth";

function MyComponent() {
  const width = useWindowWidth();
  return <span>window width {width}</span>;
}

function WindowWidethDisplay() {
  return <MyComponent />;
}
export default WindowWidethDisplay;
