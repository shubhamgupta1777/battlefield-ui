import { MdArrowBackIos } from "react-icons/md";
import "../style/Header.css";

const Header = () => {
  const Nav = () => (
    <div className="breadcrumb-nav">
      <div>
        <MdArrowBackIos />
      </div>
      <div className="breadcrumb">
        <h3>MULTIPLAYER / SERVER BROWSER</h3>
      </div>
    </div>
  );

  const Page = () => (
    <div className="page-title">
      <h2>SERVER INFO</h2>
    </div>
  );

  return (
    <div className="header">
      <Nav />
      <Page />
    </div>
  );
};

export default Header;
