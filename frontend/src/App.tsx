import { useEffect, useState } from "react";
import BootScreen from "./components/BootScreen/BootScreen";
import Login from "./components/Login/Login";

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootComplete(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  return bootComplete ? <Login /> : <BootScreen />;
}

export default App;
