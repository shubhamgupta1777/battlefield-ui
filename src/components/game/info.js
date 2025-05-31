import React from "react";
import '../../style/game/info.css'

const info = ({ players, ping, tickrate }) => {
  return (
    <div className="info-container">
      <div className="info-box">
        <div className="key">PLAYERS</div>
        <div className="value">{players}</div>
      </div>
      <div className="info-box">
        <div className="key">PING</div>
        <div className="value">{ping}</div>
      </div>
      <div className="info-box">
        <div className="key">TICKRATE</div>
        <div className="value">{tickrate}</div>
      </div>
    </div>
  );
};

export default info;
