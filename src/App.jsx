import { useEffect, useState } from "react";

const useInterval = (fn, timeout) => {
  useEffect(() => {
    setInterval(() => {
      fn();
    }, timeout);
  }, []);
};

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return <> Timer is at {count} </>;
}

export default App;
