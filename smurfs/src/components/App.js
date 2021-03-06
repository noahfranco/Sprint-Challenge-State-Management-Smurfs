import React, { useState } from "react";
import "./App.css";
import GetSmurfs from "../components/GetSmurfs.js"; 
import GetContext from "../contexts/GetContext.js";
import PostSmurfs from "../components/PostSmurfs.js"; 
import PostContext from "../contexts/PostContext";


 function App() {

const [smurfs, setSmurfs] = useState([]); 

const [smurf, setSmurf] = useState({
  name: "",
  age: "",
  height: ""
});

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <div>
          <GetContext.Provider  value={{ smurfs, setSmurfs}}> 
            <GetSmurfs /> 
          </GetContext.Provider>
          <PostContext.Provider value={{smurf, setSmurf}} > 
            <PostSmurfs />
          </PostContext.Provider>
        </div> 
      </div>
    );
}

export default App;
