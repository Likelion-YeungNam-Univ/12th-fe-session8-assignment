import React from "react";
import styled from "styled-components";

const SpecialListItem = ({ id, title, description, deleteMethod }) => {
  return (
    <Box>
      <div>{title}</div>
      <div>{description}</div>
      <div>{id}</div>
      <button
        onClick={() => {
          deleteMethod(id);
        }}
      >
        삭제
      </button>
      <hr />
    </Box>
  );
};

const Box = styled.div`
  margin: 5px;
  padding: 10px;
  text-align: center;
`;

export default SpecialListItem;
