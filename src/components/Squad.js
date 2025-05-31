const Squad = (props) => {
  // console.log(props);
  return (
    <div className="top-content panel-content">
      <div className="content-header">
        <div
          className="icon"
          style={{ backgroundImage: `url(${props.data.icon})` }}
        ></div>
        <div className="title">{props.data.title}</div>
      </div>
      <div className="content-main">
        <div className="profile-icon">+</div>
        <div className="heading">{props.data.name}</div>
      </div>
      <div></div>
    </div>
  );
};

export default Squad;
