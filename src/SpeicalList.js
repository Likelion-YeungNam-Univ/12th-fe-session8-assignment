import React from "react";
import SpecialListItem from "./SpecialLlistItem";
import styled from "styled-components";

const SpeicalList = ({ movieList, delteMethod }) => {
  return (
    <Box>
      {movieList.map((el) => {
        return (
          <SpecialListItem
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            delteMethod={delteMethod}
          />
        );
      })}
    </Box>
  );
};

const Box = styled.div`
  height: 100%;
  width: 50%;
  overflow-y: scroll;
`;

export default SpeicalList;
