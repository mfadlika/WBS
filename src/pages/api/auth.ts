import axios from "axios";
import Router from "next/router";
import Cookies from "js-cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const data = axios({
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: { username: username, password: password },
  //   url: "http://localhost:8000/api/account/signup",
  //   xsrfCookieName: "csrftoken",
  //   xsrfHeaderName: "X-CSRFTOKEN",
  //   withCredentials: true,
  // })
  //   .then(() => Router.push("/"))
  //   .catch((error) => {
  //     console.log(error);
  //     return error;
  //   });
  // return data;
  const { username, password } = req.body;
  console.log(username);
  try {
    if (username == "admin" && password == "admin") {
      res.status(200).json({ success: true });
    }
  } catch (error) {}
}

export async function signinAPI(username: string, password: string) {
  const data = axios
    .post(
      "http://localhost:5000/api/user/signin",
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
    .get("http://localhost:5000/api/account/index", {
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
      "http://localhost:5000/api/account/index",
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
