import "../style/Main.css";

import Header from "./Header";
import Info from "./server_info";
import MapRotation from "./MapRotation";
import Stats from "./Stats";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="server">
        <Info />
        <Stats />
        <MapRotation />
      </div>
    </div>
  );
};

export default Main;
