import React from "react";
import Instant from "../Component/Instantaneous/Instant";
import Header from "../Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../../src/Component/Login/Login";

function SecondPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <Instant />
    </>
  ) : (
    <Login />
  );
}

export default SecondPage;
