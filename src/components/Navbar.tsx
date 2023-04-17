import React from "react";
import Item from "./Item";
import "./navbar.scss";

type Props = {};

const items = [
  { label: "Last Hour", location: "/lasthour" },
  { label: "Today", location: "/today" },
  { label: "Yesterday", location: "/yesterday" },
  { label: "Last 3 days", location: "/last3days" },
];

const Navbar = (props: Props) => {
  return (
    <div className="container">
      <ul className="list">
        {items.map((item) => {
          return <Item label={item.label} location={item.location} />;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
