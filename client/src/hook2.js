import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {useWindowWidth} from './hooook'

function MyComponent() {
    const width = useWindowWidth();
    return <span>window width {width}</span>;
  }
  
  function PPp() {
    return <MyComponent />;
  }
  export default PPp