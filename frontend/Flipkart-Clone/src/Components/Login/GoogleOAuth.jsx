import { Center, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleOAuth() {
  const naivigate = useNavigate();
  const param = new URLSearchParams(window.location.search);
  const code = param.get("code");
  const getUsersData = async () => {
    const res = await axios.get(
      `https://flipkart-api-new.onrender.com/auth/googleOAuth?code=${code}`
    );
    console.log(res.data);
    const { status, token, name } = res.data;
    if (status === "success") {
      localStorage.setItem("flipkartToken", token);
      localStorage.setItem("flipkartUserName", name);
      naivigate("/");
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div style={{height: "350px"}} >
      <Center mt='300px'><Spinner size='xl' /></Center>
    </div>
  );
}
