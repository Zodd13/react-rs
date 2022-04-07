import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/auth/profile/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((error) => console.log(error));
  };
};

export const updateProfile = (data, id) => {
  return (dispatch) => {
    return axios
      .put(
        `${process.env.REACT_APP_API_URL}api/auth/update/`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
        data
      )
      .then((res) => {
        return axios.get(`${process.env.REACT_APP_API_URL}api/auth/profile/`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          }.then((res) => {
            dispatch({ type: UPDATE_PROFILE, payload: res.data.avatar });
          }),
        });
      })
      .catch((err) => console.log(err));
  };
};
