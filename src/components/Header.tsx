import React from "react";
import "./header.scss";

type Props = {
  title: string;
};

const header = ({ title }: Props) => {
  return (
    <div className="heading">
      <h1>{title}</h1>
    </div>
  );
};

export default header;
