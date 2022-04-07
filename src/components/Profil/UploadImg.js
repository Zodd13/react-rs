import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/user.actions";

function UploadImg() {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = () => {
    const data = new FormData();

    data.append("name", userData.username);
    data.append("userId", userData.id);
    data.append('images', file);

    dispatch(updateProfile(data, userData.id));
  };

  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'avatar</label>
      <input
        type="file"
        id="images"
        name="images"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default UploadImg;
