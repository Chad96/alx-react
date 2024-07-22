import React from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";


function Footer () {
    return (
        <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    )
}

export default Footer;