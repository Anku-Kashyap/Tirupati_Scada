import React from "react";
import LogBook from "../Component/LogBook/LogBook";
import Header from "../Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../../src/Component/Login/Login";

function FourthPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <LogBook />
    </>
  ) : (
    <Login />
  );
}

export default FourthPage;
