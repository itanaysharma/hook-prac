import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {
      // Learn about closer
      setRender((render) => !render);
    }, 1000);
  }, []);
  return <>{render ? <MyComponent></MyComponent> : <div></div>}</>;
}

function MyComponent() {
  useEffect(() => {
    console.error("Component mounted");
    // Perform setup or data fetching here

    return () => {
      console.log("component unmounted"); //Learn more about function return in useEffect
      // Cleanup code (similar to componentWillUnmount)
    };
  }, []);
  return <div>From inside my component</div>;
  // Render UI
}
export default App;
