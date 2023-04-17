import React from "react";
import { NavLink } from "react-router-dom";
import "./item.scss";

type Props = {
  label: string;
  location: string;
};

const Item = ({ label, location }: Props) => {
  return (
    <NavLink
      className={(element) => "nav-item" + (element.isActive ? "-select" : "")}
      to={location}
    >
      {label}
    </NavLink>
  );
};

export default Item;
