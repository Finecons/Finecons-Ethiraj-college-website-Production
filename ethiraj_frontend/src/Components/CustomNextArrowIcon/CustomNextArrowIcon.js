
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CustomNextArrowIcon = (props) => {
  const { style, ...rest } = props;

  const navigate = useNavigate();

  return (
    <div>
      <BsArrowRight
        onClick={() => {
          navigate(props?.onClickData);
          
        }}
        {...rest}
        style={{
          // color: "#212529",
          color: "inherit",
          cursor:"pointer",

          fontSize: "25px",
          display: "flex",
          alignItems: "center",
          ...(style || {}), // merges incoming custom styles
        }}
      />
    </div>
  );
};

export default CustomNextArrowIcon;
