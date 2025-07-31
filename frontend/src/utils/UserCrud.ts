import { useUser } from "../context/userContext";

const { setUser, setErrorMsg, setSuccessMsg } = useUser();
const baseURL = "http://backend:3000/user";

const SetErrorMsg = (error: unknown) => {
  setErrorMsg(`Error with login. Please try again later. ${error}`);
};

export const login = (loginDetails: { username: string; password: string }) => {
  try {
    fetch(`${baseURL}/login`, {
      method: "post",
      body: JSON.stringify(loginDetails),
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => SetErrorMsg(error));
  } catch (error) {
    console.log(error);
    SetErrorMsg(error);
  }
};

type UserDetailsType = {
  id?: string;
  username: string;
  password: string;
  name: string;
  club: string;
};

export const newUser = (userDetails: UserDetailsType) => {
  try {
    fetch(`${baseURL}/new`, {
      method: "post",
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then(setSuccessMsg("success"))
      .catch((error) => SetErrorMsg(error));
  } catch (error) {
    console.log(error);
    SetErrorMsg(error);
  }
};

export const updateUser = (userDetails: UserDetailsType) => {
  try {
    fetch(`${baseURL}/update`, {
      method: "post",
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then(setSuccessMsg("success"))
      .catch((error) => SetErrorMsg(error));
  } catch (error) {
    console.log(error);
    SetErrorMsg(error);
  }
};

export const deleteUser = (id: string) => {
  try {
    fetch(`${baseURL}/delete`, {
      method: "delete",
      body: id,
    })
      .then((response) => response.json())
      .then(setSuccessMsg("success"))
      .catch((error) => SetErrorMsg(error));
  } catch (error) {
    console.log(error);
    SetErrorMsg(error);
  }
};
