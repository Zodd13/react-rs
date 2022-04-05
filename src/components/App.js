import React, { useEffect } from "react";
import Routes from "../components/Routes";
import { UidContext } from "./AppContext";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/auth/jwtid`,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No user"));
    }
    fetchUser();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
