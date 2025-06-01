import "../style/Sidebar.css";
import { icons } from "../assets/icons";
import { profiles } from "../assets/profiles";

const Sidebar = () => {
  const profileArray = [
    { key: "battlefield_hardline", src: profiles.battlefield_hardline.img },
    { key: "battlefield_I", src: profiles.battlefield_I.img },
    { key: "battlefield_IV", src: profiles.battlefield_IV.img },
    { key: "battlefield_V", src: profiles.battlefield_V.img },
    { key: "career", src: profiles.career.img }
  ];

  const midIconArray = [
    { key: "watch", src: icons.watch },
    { key: "news", src: icons.news }
  ];

  const bottomIconArray = [
    { key: "help", src: icons.help },
    { key: "exit", src: icons.exit }
  ]

  const activeProfile = "battlefield_IV";

  const Top = () => {
    return <div className="top"></div>;
  };

  const PlayerList = () => {
    return (
      <div className="mid">
        <div className="container">
          {profileArray.map(({ key, src }) => (
            <div
              key={key}
              className={`box profile ${activeProfile === key ? "active" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
        <div className="container">
          {midIconArray.map(({ key, src }) => (
            <div
              key={key}
              className={'box mid-icon'}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>
    );
  };

  const Bottom = () => {
    return <div className="bottom">
        <div className="container">
          {bottomIconArray.map(({ key, src }) => (
            <div
              key={key}
              className={'box bottom-icon'}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
    </div>;
  };

  return (
    <div className="sidebar">
      <Top/>
      <PlayerList/>
      <Bottom/>
    </div>
  );
};

export default Sidebar;
