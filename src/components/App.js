import React, { useEffect } from "react";
import Routes from "../components/Routes";
import { useDispatch } from "react-redux";
import { UidContext } from "./AppContext";
import { useState } from "react";
import axios from "axios";
import { getUser } from "../actions/user.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

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

    if(uid) dispatch(getUser(uid))
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
