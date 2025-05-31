import "../style/Panel.css";
import { icons } from "../assets/icons";
import { profiles } from "../assets/profiles";
import Content from "./Content";

const panel = () => {
  const data = [
    {
      index: 0,
      title: "squad",
      icon: icons.squad,
      profile: "",
      name: "Squad Join",
      status: "",
    },
    {
      index: 1,
      title: "online",
      icon: icons.online,
      profile: profiles.tron.img,
      name: profiles.tron.name,
      status: "Online",
    },
    {
      index: 2,
      title: "offline",
      icon: icons.offline,
      profile: profiles.mary_jane.img,
      name: profiles.mary_jane.name,
      status: "Offline",
    },
  ];

  return (
    <div className="panel-container">
      <div className="right-panel">
        {data.map((item, index) => (
          <Content key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default panel;
