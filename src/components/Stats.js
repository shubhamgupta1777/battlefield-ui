import { useEffect, useState } from "react";
import "../style/Stats.css";

import Game_Info from "./game/info";
import Settings from "./game/settings";
import Advanced from "./game/advanced";
import Rules from "./game/rules";

const Stats = () => {
  const [players, setPlayers] = useState("");
  const [ping, setPing] = useState("");
  const [tickrate, setTickrate] = useState("");
  const [settings, setSettings] = useState({});
  const [advanced, setAdvanced] = useState({});
  const [rules, setRules] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/api/server-info`)
      .then((response) => response.json())
      .then((json) => {
        setPlayers(json.players);
        setPing(json.ping);
        setTickrate(json.tickrate);
        setSettings(json.settings);
        setAdvanced(json.advanced);
        setRules(json.rules);
      })
      .catch((err) => {
        console.error("Error fetching server info:", err);
      });
  }, []);

  return (
    <div className="stats-container">
      <Game_Info players={players} ping={ping} tickrate={tickrate} />
      <div className="data-container">
        <Settings settings={settings} />
        <Advanced advanced={advanced} />
        <Rules rules={rules} />
      </div>
    </div>
  );
};

export default Stats;
