import React from "react";

const BadgeButton = ({title, count, addClass, isActive}) => {
  return (
    <button onClick={ (e) => addClass(e)} className={`button-badge${isActive ? ' active' : ''}`} data-testid="basketButton">
      {title}
      <span className="badge" data-testid="basketCount">{count ?? '0'}</span>
    </button>
  );
};

export default BadgeButton;
