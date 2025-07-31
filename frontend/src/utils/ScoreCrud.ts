import { useUser } from "../context/userContext";

const { user, setErrorMsg, setScores, setSuccessMsg } = useUser();

const baseURL = "http://backend:3000/score";

const SetErrorMsg = (error: unknown) => {
  setErrorMsg(`Error with login. Please try again later. ${error}`);
};

export const getScores = () => {
  try {
    fetch(`${baseURL}/scores`, {
      method: "post",
      body: user.id,
    })
      .then((response) => response.json())
      .then((data) => setScores(data))
      .catch((error) => SetErrorMsg(error));
  } catch (error) {
    console.log(error);
    SetErrorMsg(error);
  }
};

export const addScores = (scores: { date: string; scores: number[] }) => {
  try {
    fetch(`${baseURL}/new`, {
      method: "post",
      body: JSON.stringify({ id: user.id, scores }),
    })
      .then((response) => response.json())
      .then(setSuccessMsg("success"))
      .catch((error) => SetErrorMsg(error));
  } catch (error) {
    SetErrorMsg(error);
  }
};

export const updateScores = (scores: { date: string; scores: number[] }) => {
  try {
    fetch(`${baseURL}/update`, {
      method: "post",
      body: JSON.stringify({ id: user.id, scores }),
    })
      .then((response) => response.json())
      .then(setSuccessMsg("success"))
      .catch((error) => SetErrorMsg(error));
  } catch (error) {
    SetErrorMsg(error);
  }
};
