

const PanelCategory = (props) => {
  console.log(props);
  return (
    <div className="panel-content" style={{ cursor:"pointer", marginTop: props.data.index === 0 ? "30px" : "0" }}>
      <div className="content-header">
        <div
          className="icon"
          style={{ backgroundImage: `url(${props.data.icon})` }}
        ></div>
        <div className="title">{props.data.title}</div>
      </div>
      <div className="content-main">
        {props.data.profile ? (
          <div
            className="profile-icon"
            style={{ backgroundImage: `url(${props.data.profile})`, borderLeft: props.data.status === "Online" ? "3px #23c13a solid" : "3px white solid" }}
          ></div>
        ) : (
          <div className="profile-icon placeholder">+</div> // empty fallback div
        )}
        <div className="heading">
          <span style={{ fontWeight: "bold",fontSize: "10px" }}>{props.data.name}</span> <br/>
          <span style={{fontSize: "7px"}}>{props.data.status}</span>
        </div>
      </div>
    </div>
  );
};

export default PanelCategory;
