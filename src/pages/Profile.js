import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

export default function Profile() {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil/>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
        </div>
      )}
    </div>
  );
}
