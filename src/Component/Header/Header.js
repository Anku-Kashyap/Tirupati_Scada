import React, { useState, useEffect } from "react";
import logo from "../../images/sheetal-enterprises-logo.png";
import "./Header.css";

function Header() {

  return (
    <div className="Instant-home">
      <div className="Instant-header-home">
        <div className="Instant-content-home">
          <img src={logo} className="Instant-logo-home" alt="logo" />
          <p className="instant-header-text-home">
            SUPERVISORY CONTROL AND DATA ACQUISITION SYSTEM PERI URBAN
            UTTARAKAND
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
