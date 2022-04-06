import React, { useEffect } from "react";
import Routes from "../components/Routes";
import { UidContext } from "./AppContext";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/auth/profile`,
      })
        .then((res) => {
          console.log(uid);
          setUid(res.data.id);
        })
        .catch((err) => console.log(err));
    };
    fetchToken();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
