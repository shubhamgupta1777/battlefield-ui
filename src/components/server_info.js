import "../style/server_info.css";
import flag from "../resources/images/ind_flag.svg";
import { GoStarFill } from "react-icons/go";

const server_info = () => {
    const india = flag;
  const Header = () => {
    return <div className="server-header">
      <h3>! RC3-BASEMAPS</h3>
    </div>;
  };

  const Specs = () => {
    return <div className="server-specs">
      <div className="country" style={{ backgroundImage: `url(${india})` }}></div>
      <div className="mode">
        <b>CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ</b>
      </div>
    </div>;
  };

  const Description = () => {
    return <div className="description">
      <b>
        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request,
        Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
      </b>
    </div>;
  };

  const Options = () => {
   return <div className="game-options">
      <div className="btn">JOIN</div>
      <div className="btn">SPECTATE</div>
      <div className="btn">JOIN AS COMMANDER</div>
      <div className="btn">
        <div className="star">
          <GoStarFill />
        </div>
        13672
      </div>
    </div>;
  };
  return (
    <div className="server-container">
      <Header />
      <Specs />
      <Description />
      <Options />
    </div>
  );
};

export default server_info;
