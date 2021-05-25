import React from "react";
import { withRouter } from "react-router-dom";
import "./Menu-item.scss";

const MenuItem = ({match,history,section }) => {
  console.log(match)
  return (
    // redirect category page
    <div className={`${section.size} menu-item`} onClick={()=>history.push(`${match.url}${section.linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${section.imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{section.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
