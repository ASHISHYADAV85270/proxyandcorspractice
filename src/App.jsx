import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [userdata, Setuserdata] = useState([]);
  useEffect(() => {
    axios
      .get("/api/aboutme")
      .then((res) => {
        console.log(`hiii i am respo ${res.data}`);
        Setuserdata(res.data);
      })
      .catch((error) => {
        console.log(" i am error");
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <h1>User name is {userdata.name}</h1>
        <p>About user is {userdata.About}</p>
      </div>
    </>
  );
}

export default App;
