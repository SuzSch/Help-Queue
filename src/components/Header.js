import React from "react";
import ticketImage from "./../img/ticket.png";


function Header() {
  return (
    <React.Fragment>
    <h1>Help Queue</h1>
    <img src={ticketImage} alt="A red ticket that's says admit one on the front" />
    </React.Fragment>
  );
}

export default Header;
