import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";

export default function Profile() {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <h1> PAGE UPDATE </h1>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
        </div>
      )}
    </div>
  );
}
