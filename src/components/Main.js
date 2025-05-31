import "../style/Main.css";

import Header from "./Header";
import Info from "./server_info";
import Maps from "./Maps";
import Stats from "./Stats";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="server">
        <Info />
        <Stats />
        <Maps />
      </div>
    </div>
  );
};

export default Main;
