import axios from "axios";
import Router from "next/router";
import Cookies from "js-cookie";

export default async function signupAPI(
  email: string,
  username: string,
  password: string
) {
  const data = axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email: email, username: username, password: password },
    url: "http://localhost:8000/api/account/signup",
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFTOKEN",
    withCredentials: true,
  })
    .then(() => Router.push("/"))
    .catch((error) => {
      console.log(error);
      return error;
    });
  return data;
}

export async function signinAPI(username: string, password: string) {
  const data = axios
    .post(
      "http://localhost:8000/api/account/signin",
      { data: { username: username, password: password } },
      {
        headers: {
          "Content-Type": "application/json",
        },
        xsrfCookieName: "csrftoken",
        xsrfHeaderName: "X-CSRFToken",
        withCredentials: true,
      }
    )
    .then((response) => {
      localStorage.setItem("token", response.data["token"]);
      console.log(response);
      Router.push("/");
    })
    .catch((error) => {
      return error;
    });
  return data;
}

export async function getData() {
  var data;
  await axios
    .get("http://localhost:8000/api/account/index", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      xsrfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFToken",
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      data = response.data;
    });
  return data;
}

export async function postData(post: string) {
  axios
    .post(
      "http://localhost:8000/api/account/index",
      { post: post },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        xsrfCookieName: "csrftoken",
        xsrfHeaderName: "X-CSRFToken",
        withCredentials: true,
      }
    )
    .then((response) => console.log(response));
}
