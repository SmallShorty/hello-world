import './App.css';
import React, {useEffect} from "react";
import {LogoBounce} from "./components/LogoBounce";

function App() {
    useEffect(() => {
        document.title = "<hello-world/>"
    }, []);
  return (
    <div className="App">
      <LogoBounce/>
    </div>
  );
}

export default App;
